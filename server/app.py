from flask import Flask, render_template, send_file

app = Flask(
    __name__,
    template_folder="../client/public",
    static_folder="../client/public",
    static_url_path="/static",
)

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(port=8888, debug=True)
