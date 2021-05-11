import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';

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

schema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 12);
  this.password2 = undefined;
});

schema.methods.correct = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export default mongoose.model('User', schema);
