import User from '../../models/User';
import Err from '../../errors/Err';

export default async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      throw new Err('please provide email and password', 400);
    }

    const user = await User.findOne({ email, password });

    if (!user) {
      throw new Err('wrong email or password', 400);
    }

    req.user = user;
    req.status = 200;

    next();
  } catch (e) {
    next(e);
  }
};
