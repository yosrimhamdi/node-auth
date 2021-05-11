import User from '../../models/User';

export default async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });

    req.user = user;
    req.status = 201;

    next();
  } catch (e) {
    next(e);
  }
};
