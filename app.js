import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import authRouter from './routes/auth';
import requireLogIn from './controllers/auth/requireLogIn';
import admin from './controllers/auth/admin';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/auth', authRouter);

app.get('/protected', requireLogIn, admin, (req, res) => {
  res.send('welcome');
});

app.use((err, req, res, next) => {
  if (!err.operational) {
    console.log(err);
  }
  res.status(err.status || 500).json(err);
});

export default app;
