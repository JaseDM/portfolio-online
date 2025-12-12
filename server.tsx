import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';

// NOTE: This server file assumes you have 'express' installed.
// To run: npx ts-node server.tsx

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets (CSS, JS, Images) if you have a build folder, 
// or serving raw files for development simulation. 
// We disable 'index' so that '/' is handled by our wildcard route below.
app.use(express.static('.', { index: false }));

app.get('*', (req, res) => {
  // 1. Read the index.html template
  // path.resolve uses CWD by default if the path is relative, avoiding explicit process.cwd() call to fix type issues
  const templatePath = path.resolve('index.html');
  
  fs.readFile(templatePath, 'utf8', (err, template) => {
    if (err) {
      console.error('Error reading template:', err);
      return res.status(500).send('Internal Server Error');
    }

    // 2. Render the React App to a string
    // We wrap it in LanguageProvider to match client structure
    const appContent = renderToString(
      <React.StrictMode>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </React.StrictMode>
    );

    // 3. Inject the rendered content into the HTML
    // We look for the placeholder we added in index.html or the root div
    const html = template.replace(
      '<!--SSR-CONTENT-->',
      appContent
    );

    // 4. Send the fully rendered HTML to the browser
    res.send(html);
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
  console.log(`SSR Ready: Crawlers will now see full content.`);
});