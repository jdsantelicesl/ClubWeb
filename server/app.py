# Flask backend will work as a RESTFUL API, meaning that it will
# allow React front end to fetch and send data to it, but
# it will not server the React app. 

from flask import Flask

app = Flask(__name__)

@app.route("/")
def index():
    return "success"

if __name__ == "__main__":
    app.run(port=8888, debug=True)
