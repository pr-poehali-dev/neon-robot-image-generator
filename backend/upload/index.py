import json
import os
import base64
import boto3


def handler(event: dict, context) -> dict:
    """Загружает изображения в S3-хранилище проекта и возвращает CDN-ссылки"""
    method = event.get('httpMethod', 'GET')
    cors = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token',
        'Content-Type': 'application/json'
    }

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': {**cors, 'Access-Control-Max-Age': '86400'}, 'body': ''}

    if method != 'POST':
        return {'statusCode': 405, 'headers': cors, 'body': json.dumps({'error': 'Method not allowed'})}

    body = json.loads(event.get('body') or '{}')
    files = body.get('files') or []
    if not files:
        return {'statusCode': 400, 'headers': cors, 'body': json.dumps({'error': 'No files'})}

    key_id = os.environ['AWS_ACCESS_KEY_ID']
    s3 = boto3.client(
        's3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=key_id,
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY']
    )

    uploaded = []
    for f in files:
        key = f['key']
        data = base64.b64decode(f['data'])
        s3.put_object(
            Bucket='files',
            Key=key,
            Body=data,
            ContentType=f.get('contentType', 'image/webp')
        )
        uploaded.append({
            'key': key,
            'url': f'https://cdn.poehali.dev/projects/{key_id}/bucket/{key}'
        })

    return {'statusCode': 200, 'headers': cors, 'body': json.dumps({'uploaded': uploaded})}
