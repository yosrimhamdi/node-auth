import User from '../../models/User';
import catcher from '../../errors/catcher';

const middleware = async (req, res, next) => {
  const { email, password, password2 } = req.body;

  const user = await User.create({ email, password, password2 });

  req.user = user;
  req.status = 201;

  next();
};

export default catcher(middleware);
