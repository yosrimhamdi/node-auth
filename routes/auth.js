import { Router } from 'express';
import signup from '../controllers/auth/signup';
import login from '../controllers/auth/login';
import logout from '../controllers/auth/logout';
import sendToken from '../controllers/auth/sendToken';
import passwordRouter from './password';

const router = Router();

router.use('/password', passwordRouter);

router.post('/logout', logout);
router.post('/signup', signup);
router.post('/login', login);

router.use(sendToken);

export default router;
