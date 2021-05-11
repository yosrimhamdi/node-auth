import catcher from '../errors/catcher';
import User from '../models/User';

export default catcher(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next({ failed: 'please provide email and password' });
  }

  const user = await User.findOne({ email, password });

  if (!user) {
    return next({ failed: 'wrong email or password' });
  }

  req.user = user;
  req.status = 200;

  next();
});
