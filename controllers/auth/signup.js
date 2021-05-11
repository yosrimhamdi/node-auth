import User from '../../models/User';

export default async (req, res, next) => {
  const { email, password, password2 } = req.body;

  await User.deleteMany();

  const user = await User.create({ email, password, password2 });

  req.user = user;
  req.status = 201;

  next();
};
