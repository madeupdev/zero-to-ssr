import React from 'react';

export const HTML = ({ app = '', lang = 'en' }) => (
  <html lang={lang} dir={lang.toLowerCase().startsWith('ar') ? 'rtl' : 'ltr'}>
    <head>
      <title>My SSR App</title>
    </head>
    <body>
      <div id="app" dangerouslySetInnerHTML={{ __html: app }} />
      <script src="/assets/app.js"></script>
      <noscript>Javascript is disabled</noscript>
    </body>
  </html>
);
