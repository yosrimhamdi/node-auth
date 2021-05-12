import User from '../../models/User';
import catcher from '../../errors/catcher';
import Mailer from '../../mail/Mailer';

const middleware = async (req, res, next) => {
  const { email, password, password2 } = req.body;

  await User.deleteMany();

  const user = await User.create({ email, password, password2 });

  const mailer = new Mailer();
  await mailer.welcome(email);

  req.user = user;
  req.status = 201;

  next();
};

export default catcher(middleware);
