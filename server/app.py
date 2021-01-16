from flask import Flask, request

import os
from dotenv import load_dotenv
import psycopg2
from psycopg2.extensions import parse_dsn

load_dotenv()
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_USER = os.getenv('DB_USER')
app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return 'hello world!'

@app.route('/add', methods=['POST'])
def add_score():
    with conn.cursor() as cur:
        cur.execute('''
        INSERT INTO Score (Exercise, Score)
        VALUES (
            'PushUp',
            100
        )''')
    conn.commit()
    return {'status': 200}

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
    return {'status': 200, 'scores': results}

if __name__ == '__main__':
    #print(parse_dsn())
    conn = psycopg2.connect(f'postgres://{DB_USER}:{DB_PASSWORD}@free-tier.gcp-us-central1.cockroachlabs.cloud:26257/arid-otter-232.defaultdb?sslmode=verify-full&sslrootcert=cc-ca.crt')
    app.run(debug=True)
    conn.close()