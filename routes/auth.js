import express from 'express';
import signup from '../controllers/signup';
import login from '../controllers/login';
import logout from '../controllers/logout';
import sendToken from '../controllers/sendToken';

const router = express.Router();

router.post('/signup', signup, sendToken);
router.get('/login', login, sendToken);
router.get('/logout', logout);

export default router;
