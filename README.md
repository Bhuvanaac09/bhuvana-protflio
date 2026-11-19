# Bhuvaneshwari C. — Portfolio

A responsive, single-page portfolio served with Python and Flask. The design follows the supplied editorial reference: a near-black canvas, oversized red display type, condensed headings, and strong portrait-led sections.

## Run locally (Windows / PowerShell)

1. Extract the ZIP file.
2. Open the extracted `bhuvaneshwari_portfolio` folder in VS Code.
3. Open the VS Code terminal and run:

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python app.py
```

4. Open <http://127.0.0.1:5000> in your browser.

If PowerShell blocks virtual-environment activation, run the following once in that terminal, then activate again:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

## Project structure

```text
bhuvaneshwari_portfolio/
├── app.py
├── requirements.txt
├── README.md
├── templates/
│   └── index.html
└── static/
    ├── css/style.css
    ├── js/main.js
    ├── images/bhuvaneshwari-portrait.jpg
    └── files/Bhuvaneshwari-C-Resume.pdf
```

The portfolio is built with Flask + HTML/CSS/JavaScript. Python runs the local web server; the browser uses HTML and CSS to render the interface. The resume download is available from the website's header and contact section.

## Update content

Edit `templates/index.html` to update the portfolio text. Replace `static/images/bhuvaneshwari-portrait.jpg` to change the profile image. Keep the filename the same unless you also update the image paths in the template and CSS.
