# Bhuvaneshwari C. — Portfolio

A responsive, single-page portfolio served with Node.js and Express. The design follows an editorial aesthetic: a near-black canvas, oversized red display type, condensed headings, and portrait-led sections.

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000> in your browser.

To build and run for production:

```bash
npm run build
npm start
```

## Project structure

```text
.
├── server.ts
├── package.json
├── tsconfig.json
├── README.md
└── public/
    ├── index.html
    ├── css/style.css
    ├── js/main.js
    ├── images/bhuvaneshwari-portrait.jpg
    └── files/Bhuvaneshwari-C-Resume.pdf
```

The portfolio is served with Express + HTML/CSS/JavaScript. The resume download is available at `/resume` from the website's header and contact section, and a health check endpoint is available at `/health`.

## Update content

Edit `public/index.html` to update the portfolio text. Replace `public/images/bhuvaneshwari-portrait.jpg` to change the profile image, and replace `public/files/Bhuvaneshwari-C-Resume.pdf` to update the downloadable resume.
