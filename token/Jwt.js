import jwt from 'jsonwebtoken';
import { promisify } from 'util';

const sign = promisify(jwt.sign);

const verify = promisify(jwt.verify);

const { JWT_SECRET, JWT_EXPIRES } = process.env;

class Jwt {
  static async create(payload) {
    return sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES });
  }

  static async verify(token) {
    return verify(token, JWT_SECRET);
  }
}

export default Jwt;
