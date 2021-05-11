import User from '../../models/User';
import Jwt from '../../token/Jwt';
import Err from '../../errors/Err';
import catcher from '../../errors/catcher';

const middleware = async (req, res, next) => {
  const payload = await Jwt.verify(req.cookies.token);

  const user = await User.findById(payload.id);

  if (!user) {
    res.clearCookie('token');

    throw new Err('Unothorized, log in again to grant access', 401);
  }

  req.user = user;

  next();
};

export default catcher(middleware);
