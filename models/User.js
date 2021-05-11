import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: {
      value: true,
      message: ' the email is required',
    },
    unique: true,
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
