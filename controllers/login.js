import catcher from '../errors/catcher';
import User from '../models/User';

export default catcher(async (req, res, next) => {
  const user = await User.findOne(req.body);

  if (!user) {
    return next({ name: 'no user found' });
  }

  req.user = user;
  req.status = 200;

  next();
});
