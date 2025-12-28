import json
import os
import hashlib
import time
from typing import Dict, Any

def generate_token(password: str) -> str:
    '''Генерация токена на основе пароля и времени'''
    timestamp = str(int(time.time() / 3600))
    return hashlib.sha256(f"{password}:{timestamp}".encode()).hexdigest()

def verify_token(token: str, password: str) -> bool:
    '''Проверка токена'''
    current_token = generate_token(password)
    prev_token = hashlib.sha256(f"{password}:{str(int(time.time() / 3600) - 1)}".encode()).hexdigest()
    return token == current_token or token == prev_token

def handler(event: Dict[str, Any], context) -> Dict[str, Any]:
    '''Проверка пароля для доступа к дашборду'''
    
    method = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    admin_password = os.environ.get('ADMIN_PASSWORD', '')
    if not admin_password:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'success': False, 'error': 'Password not configured'}),
            'isBase64Encoded': False
        }
    
    if method == 'GET':
        token = event.get('headers', {}).get('x-auth-token', '')
        if verify_token(token, admin_password):
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'success': True}),
                'isBase64Encoded': False
            }
        else:
            return {
                'statusCode': 401,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'success': False, 'error': 'Invalid token'}),
                'isBase64Encoded': False
            }
    
    if method == 'POST':
        try:
            body = json.loads(event.get('body', '{}'))
            password = body.get('password', '')
            
            if password == admin_password:
                token = generate_token(admin_password)
                return {
                    'statusCode': 200,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({'success': True, 'token': token}),
                    'isBase64Encoded': False
                }
            else:
                return {
                    'statusCode': 401,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({'success': False, 'error': 'Invalid password'}),
                    'isBase64Encoded': False
                }
        except Exception as e:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'success': False, 'error': str(e)}),
                'isBase64Encoded': False
            }
    
    return {
        'statusCode': 405,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'success': False, 'error': 'Method not allowed'}),
        'isBase64Encoded': False
    }