from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
@app.route('/event',methods=['GET'])
def ReturnJSON():
    if(request.method == 'GET'):
        data=[
            {'id':'1','name': 'Sacramento City College Student 1'},
            {'id':'2','name': 'Student 2'}
        ]
    return jsonify(data)