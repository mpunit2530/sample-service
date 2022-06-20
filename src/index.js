import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import routes from './routes';

const app = express();

// * Application-Level Middleware * //

// Third-Party Middleware

app.use(cors());

// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom Middleware

const myLogger = function (req, res, next) {
  console.log('LOGGED REQ:::', req.url);
  next();
};

app.use(myLogger)

// * Routes * //
app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.use('/sailings', routes.sailings);

// * Start * //

app.listen(process.env.PORT || 3000, () =>
  console.log(`Example app listening on port ${process.env.PORT || 3000}!`),
);
