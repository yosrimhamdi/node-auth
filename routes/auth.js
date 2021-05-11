import express from 'express';
import signup from '../controllers/signup';
import login from '../controllers/login';
import sendToken from '../controllers/sendToken';

const router = express.Router();

router.post('/signup', signup);
router.get('/login', login);

router.use(sendToken);

export default router;
