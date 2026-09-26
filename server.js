import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const projectDirectory = dirname(fileURLToPath(import.meta.url));
const messagesPath = resolve(projectDirectory, 'messages.json');
const app = express();
const apiApp = express();

apiApp.use(express.json({ limit: '10kb' }));

let pendingWrite = Promise.resolve();

apiApp.post('/api/messages', async (req, res) => {
  const name = typeof req.body?.name === 'string' ? req.body.name.trim() : '';
  const email = typeof req.body?.email === 'string' ? req.body.email.trim() : '';
  const message = typeof req.body?.message === 'string' ? req.body.message.trim() : '';

  if (!name || name.length > 100) {
    return res.status(400).json({ error: 'Enter a name of 1 to 100 characters.' });
  }
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Enter a valid email address.' });
  }
  if (!message || message.length > 5000) {
    return res.status(400).json({ error: 'Enter a message of 1 to 5000 characters.' });
  }

  const saveOperation = pendingWrite.then(async () => {
    let messages;
    try {
      messages = JSON.parse(await readFile(messagesPath, 'utf8'));
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
      messages = [];
    }

    if (!Array.isArray(messages)) {
      throw new Error('The messages file must contain a JSON array.');
    }

    messages.push({ name, email, message, submittedAt: new Date().toISOString() });
    await writeFile(messagesPath, `${JSON.stringify(messages, null, 2)}\n`, 'utf8');
  });
  pendingWrite = saveOperation.catch(() => {});

  try {
    await saveOperation;
    return res.status(201).json({ message: 'Your message was saved.' });
  } catch (error) {
    console.error('Could not save contact message:', error);
    return res.status(500).json({ error: 'The message could not be saved. Please try again.' });
  }
});

export { apiApp };

const buildDirectory = resolve(projectDirectory, 'dist');
app.use(express.static(buildDirectory));
app.use(apiApp);
app.use((req, res, next) => {
  if (req.method !== 'GET' || req.path.startsWith('/api/')) return next();
  return res.sendFile(resolve(buildDirectory, 'index.html'), (error) => {
    if (error) next(error);
  });
});

const isMainModule = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMainModule) {
  const port = Number(process.env.PORT || process.env.API_PORT || 3001);
  app.listen(port, () => {
    console.log(`Portfolio server listening on http://localhost:${port}`);
  });
}