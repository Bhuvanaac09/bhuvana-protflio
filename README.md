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
├── vercel.json
├── package.json
├── tsconfig.json
├── README.md
└── public/
    ├── index.html
    ├── health.json
    ├── css/style.css
    ├── js/main.js
    ├── images/bhuvaneshwari-portrait.jpg
    └── files/Bhuvaneshwari-C-Resume.pdf
```

## Deploy on Vercel

1. Push this repository to GitHub (or export/download the project and push it to your GitHub repo).
2. Go to [vercel.com/new](https://vercel.com/new) and import your repository.
3. Leave the default settings as-is — `vercel.json` automatically configures the build, static output directory (`public`), and `/resume` PDF download route.
4. Click **Deploy**.

Alternatively, deploy directly from your terminal using the Vercel CLI:

```bash
npx vercel --prod
```

The portfolio is served with Express locally and as an optimized static site on Vercel. The resume download is available at `/resume` from the website's header and contact section, and a health check endpoint is available at `/health`.

## Update content

Edit `public/index.html` to update the portfolio text. Replace `public/images/bhuvaneshwari-portrait.jpg` to change the profile image, and replace `public/files/Bhuvaneshwari-C-Resume.pdf` to update the downloadable resume.
