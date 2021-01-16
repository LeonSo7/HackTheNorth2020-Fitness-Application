from flask import Flask, request
from werkzeug.exceptions import HTTPException

import os
from dotenv import load_dotenv
import logging
import psycopg2
from psycopg2.extensions import parse_dsn

load_dotenv()
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_USER = os.getenv('DB_USER')
app = Flask(__name__)

@app.route('/calculate', methods=['POST'])
def calculate_score():
    data = request.get_json()
    if data['exercise'] is None:
        abort(400, 'exercise parameter was not passed in')
    # TODO: calculate score
    score = 1
    add_score(data['exercise'], score)
    return {'status': 200, 'score': score}

def add_score(exercise, score):
    with conn.cursor() as cur:
        cur.execute(f'''
        INSERT INTO Score (Exercise, Score)
        VALUES (
            '{exercise}',
            {score}
        )''')
        
    conn.commit()
    logging.debug('add_score(): status message: %s', cur.statusmessage)

#query /scores?exercise=<exercise> for filter
@app.route('/scores', methods=['GET'])
def get_scores():
    where_con = request.args.get('exercise', default='')
    if where_con != '':
        where_con = f"AND exercise = '{where_con}'"

    with conn.cursor() as cur:
        cur.execute(f'''
        SELECT * FROM Score
        where 1=1 {where_con}
        ''')

        results = cur.fetchall()

    conn.commit()
    logging.debug('get_scores(): status message: %s', cur.statusmessage)

    return {'status': 200, 'scores': results}

@app.errorhandler(HTTPException)
def resource_not_found(err):
    return {'code': err.code, 
            'error': str(err)}, err.code

if __name__ == '__main__':
    conn = psycopg2.connect(f'postgres://{DB_USER}:{DB_PASSWORD}@free-tier.gcp-us-central1.cockroachlabs.cloud:26257/arid-otter-232.defaultdb?sslmode=verify-full&sslrootcert=cc-ca.crt')
    app.run(debug=True)
    conn.close()