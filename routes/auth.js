import { Router } from 'express';
import signup from '../controllers/auth/signup';
import login from '../controllers/auth/login';
import logout from '../controllers/auth/logout';
import sendToken from '../controllers/auth/sendToken';
import passwordRouter from './password';

const router = Router();

router.post('/signup', signup, sendToken);
router.get('/login', login, sendToken);
router.get('/logout', logout);

router.use('/password', passwordRouter);

export default router;
