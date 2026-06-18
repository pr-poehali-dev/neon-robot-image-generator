import json
import urllib.request


def handler(event: dict, context) -> dict:
    '''
    Business: Возвращает курс USDT/RUB с биржи Rapira (цена покупки bid) для конвертации баланса в рубли
    Args: event - dict с httpMethod; context - объект с request_id
    Returns: HTTP-ответ с курсом bid, ask, close USDT/RUB
    '''
    method: str = event.get('httpMethod', 'GET')

    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
    }

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    req = urllib.request.Request(
        'https://api.rapira.net/open/market/rates',
        headers={'User-Agent': 'Mozilla/5.0'},
    )
    with urllib.request.urlopen(req, timeout=10) as resp:
        payload = json.loads(resp.read().decode('utf-8'))

    rate = None
    for item in payload.get('data', []):
        if item.get('symbol') == 'USDT/RUB':
            rate = {
                'bid': item.get('bidPrice'),
                'ask': item.get('askPrice'),
                'close': item.get('close'),
                'symbol': 'USDT/RUB',
            }
            break

    if rate is None:
        return {
            'statusCode': 502,
            'headers': {**cors_headers, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'rate not found'}),
        }

    return {
        'statusCode': 200,
        'headers': {**cors_headers, 'Content-Type': 'application/json'},
        'isBase64Encoded': False,
        'body': json.dumps(rate),
    }
