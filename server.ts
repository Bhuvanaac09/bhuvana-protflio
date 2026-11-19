import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve public directory whether running from source (tsx server.ts) or compiled (dist/server.js)
const rootDir = path.basename(__dirname) === 'dist' ? path.resolve(__dirname, '..') : __dirname;
const publicDir = path.join(rootDir, 'public');

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const HOST = '0.0.0.0';

app.use(express.static(publicDir));

app.get('/', (_req: Request, res: Response) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.get('/resume', (_req: Request, res: Response) => {
  const resumePath = path.join(publicDir, 'files', 'Bhuvaneshwari-C-Resume.pdf');
  res.download(resumePath, 'Bhuvaneshwari-C-Resume.pdf', (err) => {
    if (err && !res.headersSent) {
      res.status(404).json({ error: 'Resume file not found' });
    }
  });
});

app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, HOST, () => {
  console.log(`Portfolio server running on http://${HOST}:${PORT}`);
});
