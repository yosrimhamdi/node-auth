import mongoose from 'mongoose';
import validator from 'validator';

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: {
      value: true,
      message: 'the email is required',
    },
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'invalid email',
    },
  },
  password: {
    type: String,
    required: {
      value: true,
      message: 'the password field is required',
    },
    minlength: 8,
  },
});

export default mongoose.model('User', schema);
