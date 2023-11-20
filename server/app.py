from flask import Flask, render_template

app = Flask(__name__, template_folder="../client/public")


@app.route("/")
def index():
    return render_template("client/index.html")
