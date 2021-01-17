from flask import Flask, request, abort
from werkzeug.exceptions import HTTPException

import os
from dotenv import load_dotenv
import logging
import psycopg2
from psycopg2.extensions import parse_dsn
import subprocess
import shutil 

from processVideos import storeImages
from calculateScore import compare_images, compare_workout

load_dotenv()
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_USER = os.getenv('DB_USER')
app = Flask(__name__)

# send post request with file
@app.route('/calculate', methods=['POST'])
def calculate_score():
    if request.form['exercise'] is None or request.files['file'] is None:
        abort(400, 'a parameter was not passed in')

    store_file_loc = './vid/personal.webm'
    dest_file_loc = './vid/personal.mp4'
    request.files['file'].save(store_file_loc)
    subprocess.call(['ffmpeg', '-y', '-i', store_file_loc, dest_file_loc])

    exercise = request.form['exercise']
    storeImages(f'youtube_{exercise}_images', f'{exercise}.mp4') # stores youtube video
    storeImages(f'personal_images', 'personal.mp4') # stores recorded video
    score = int(compare_workout(f'./vid/youtube_{exercise}_images', f'./vid/personal_images'))

    add_score(exercise, int(score))
    
    #delete the personal images folder after using it
    if os.path.isdir('./vid/personal_images'):
        shutil.rmtree('./vid/personal_images')

    '''
    score <integer>
    '''
    return {'status': 200, 'score': score}

@app.route('/test', methods=['GET'])
def test():
    if request.form['exercise'] is None:
        abort(400, 'a parameter was not passed in')

    exercise = request.form['exercise']
    storeImages(f'youtube_{exercise}_images', f'{exercise}.mp4') # stores youtube video
    storeImages(f'personal_images', 'personal.mp4') # stores recorded video
    score = compare_workout(f'./vid/youtube_{exercise}_images', f'./vid/personal_images')

    #add_score(exercise, score)
    
    #if os.path.isfile('./vid/youtube.mp4'):
    #    os.remove('./vid/youtube.mp4')
    '''
    score <integer>
    '''
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

    '''
    results: [
        [
            id <integer>,
            exercise <string>,
            score <integer>,
            timestamp <timestamp>
        ],
        ...
    ]
    '''
    return {'status': 200, 'scores': results}

@app.errorhandler(HTTPException)
def resource_not_found(err):
    return {'code': err.code, 
            'error': str(err)}, err.code

if __name__ == '__main__':
    conn = psycopg2.connect(f'postgres://{DB_USER}:{DB_PASSWORD}@free-tier.gcp-us-central1.cockroachlabs.cloud:26257/arid-otter-232.defaultdb?sslmode=verify-full&sslrootcert=cc-ca.crt')
    app.run(host='0.0.0.0', debug=True, port=5000)
    conn.close()