import Jwt from '../../token/Jwt';
import catcher from '../../errors/catcher';

const middleware = async (req, res) => {
  const { user, status } = req;

  const token = await Jwt.create({ id: user._id });

  res.cookie('token', token, {
    expires: new Date(Date.now() + 86400000 * process.env.JWT_COOKIE_EXPIRES),
  });

  res.status(status).json({ 'success': true });
};

export default catcher(middleware);
