import User from '../../models/User';
import catcher from '../../errors/catcher';

export default catcher(async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });

    req.user = user;
    req.status = 201;

    next();
  } catch (e) {
    next(e);
  }
});
