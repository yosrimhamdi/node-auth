import User from '../../models/User';
import Err from '../../errors/Err';
import catcher from '../../errors/catcher';

const middleware = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Err('please provide email and password', 400);
  }

  const user = await User.findOne({ email });

  if (!user || !(await user.correct(password))) {
    throw new Err('wrong email or password', 401);
  }

  req.user = user;
  req.status = 200;

  next();
};

export default catcher(middleware);
