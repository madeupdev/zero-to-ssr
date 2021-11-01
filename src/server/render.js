import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { HTML } from './HTML';
import { App } from '../shared/App';

export const render = (req, res) => {
  const { lang = 'en' } = req.query;
  const app = ReactDOMServer.renderToString(<App />);
  const rendered = ReactDOMServer.renderToStaticMarkup(
    <HTML app={app} lang={lang} />
  );

  res.send(`<!DOCTYPE html>${rendered}`);
};
