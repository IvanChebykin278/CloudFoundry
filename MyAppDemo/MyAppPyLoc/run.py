import os
from cfenv import AppEnv
from flask import Flask, Response
import requests

app = Flask(__name__)
env = AppEnv()

port = int(os.environ.get('PORT', 3000))
hana = env.get_service(label='hana')

@app.route('/pyData')
def main():

    r = requests.get('https://myappjsloc.cfapps.eu10.hana.ondemand.com/xsodata/data.xsodata/MyAppData')
    return r.text.replace("name", "hello Python")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port)