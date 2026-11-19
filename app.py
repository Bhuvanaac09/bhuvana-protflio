from pathlib import Path
from flask import Flask, render_template, send_from_directory

BASE_DIR = Path(__file__).resolve().parent
app = Flask(__name__, template_folder="templates", static_folder="static")


@app.get("/")
def home():
    return render_template("index.html")


@app.get("/resume")
def resume():
    return send_from_directory(
        BASE_DIR / "static" / "files",
        "Bhuvaneshwari-C-Resume.pdf",
        as_attachment=True,
        download_name="Bhuvaneshwari-C-Resume.pdf",
    )


@app.get("/health")
def health():
    return {"status": "ok"}


if __name__ == "__main__":
    # Set FLASK_DEBUG=1 in your environment only while developing locally.
    debug_mode = __import__("os").environ.get("FLASK_DEBUG", "0") == "1"
    app.run(host="127.0.0.1", port=5000, debug=debug_mode)
