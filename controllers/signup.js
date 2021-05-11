import User from '../models/User';
import catcher from '../errors/catcher';

export default catcher(async (req, res, next) => {
  const user = await User.create(req.body);

  req.user = user;
  req.status = 201;

  next();
});
