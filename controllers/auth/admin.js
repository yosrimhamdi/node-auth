import catcher from '../../errors/catcher';
import Err from '../../errors/Err';

const middleware = (req, res, next) => {
  if (req.user.role !== 'admin') {
    throw new Err('you are not an admin to perfom this action', 401);
  }

  next();
};

export default catcher(middleware);
