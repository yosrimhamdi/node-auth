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
  password2: {
    type: String,
    required: {
      value: true,
      message: 'the password2 field is required',
    },
    validate: {
      validator: function (password2) {
        return password2 === this.password;
      },
      message: 'passwords do not match',
    },
  },
});

schema.pre('save', function () {
  this.password2 = undefined;
});

export default mongoose.model('User', schema);
