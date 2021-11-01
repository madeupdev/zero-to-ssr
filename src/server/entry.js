import express from 'express';
import path from 'path';
import { render } from './render';

const app = express();

app.use('/assets', express.static(path.join(__dirname, '..', 'client')));

app.get('*', render);

app.listen(3000, () => {
  console.log(`Server is listening at http://localhost:${3000}`);
});
