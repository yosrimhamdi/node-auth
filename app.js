import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import authRouter from './routes/auth';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/auth', authRouter);

app.use((err, req, res, next) => {
  res.status(500).json(err);
});

export default app;
