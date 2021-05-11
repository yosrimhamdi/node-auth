import mongoose from 'mongoose';
import app from './app';

mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000);
