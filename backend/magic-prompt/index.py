import json
import os
import urllib.request
import urllib.error

CORS = {'Access-Control-Allow-Origin': '*'}
RATIO_MAP = {'1:1': '1x1', '16:9': '16x9', '9:16': '9x16'}
API_URL = 'https://api.ideogram.ai/v1/ideogram-v4/magic-prompt'


def _resp(status: int, body: dict) -> dict:
    return {'statusCode': status, 'headers': {**CORS, 'Content-Type': 'application/json'}, 'body': json.dumps(body, ensure_ascii=False)}


def _call(payload: dict, key: str):
    req = urllib.request.Request(
        API_URL,
        data=json.dumps(payload).encode(),
        headers={'Api-Key': key, 'Content-Type': 'application/json'},
        method='POST',
    )
    proxy = os.environ.get('IDEOGRAM_PROXY', '').strip()
    if proxy and '://' not in proxy:
        parts = proxy.split(':')
        if len(parts) == 4:
            host, port, user, pwd = parts
            proxy = f'http://{user}:{pwd}@{host}:{port}'
        else:
            proxy = f'http://{proxy}'
    handlers = [urllib.request.ProxyHandler({'http': proxy, 'https': proxy})] if proxy else []
    opener = urllib.request.build_opener(*handlers)
    try:
        with opener.open(req, timeout=25) as r:
            return r.status, json.loads(r.read().decode() or '{}')
    except urllib.error.HTTPError as e:
        return e.code, {'error': e.read().decode(errors='ignore')[:500]}


def _to_text(data) -> str:
    if isinstance(data, dict) and 'json_prompt' in data:
        data = data['json_prompt']
    if isinstance(data, str):
        return data
    return json.dumps(data, ensure_ascii=False, indent=2)


def handler(event: dict, context) -> dict:
    """Улучшает промпт через Ideogram Magic Prompt и возвращает расширенный текст"""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {**CORS, 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type, X-Auth', 'Access-Control-Max-Age': '86400'}, 'body': ''}

    if event.get('httpMethod') != 'POST':
        return _resp(405, {'error': 'Method not allowed'})

    body = json.loads(event.get('body') or '{}')
    prompt = (body.get('prompt') or '').strip()
    if not prompt:
        return _resp(400, {'error': 'Пустой промпт'})

    key = os.environ.get('IDEOGRAM_API_KEY')
    if not key:
        return _resp(500, {'error': 'Не задан ключ Ideogram'})

    payload = {'text_prompt': prompt[:4000]}
    ratio = RATIO_MAP.get(body.get('ratio') or '')
    if ratio:
        payload['aspect_ratio'] = ratio

    status, data = _call(payload, key)
    if status in (400, 422) and 'aspect_ratio' in payload:
        payload.pop('aspect_ratio')
        status, data = _call(payload, key)

    if status != 200:
        print(f'ideogram error {status}: {data}')
        return _resp(502, {'error': f'Ideogram вернул ошибку {status}'})

    return _resp(200, {'magicPrompt': _to_text(data), 'raw': data})