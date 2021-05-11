import catcher from '../errors/catcher';
import User from '../models/User';
import Err from '../errors/Err';

export default catcher(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new Err('please provide email and password', 400));
  }

  const user = await User.findOne({ email, password });

  if (!user) {
    return next(new Err('wrong email or password', 400));
  }

  req.user = user;
  req.status = 200;

  next();
});
