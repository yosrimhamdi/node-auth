import { Router } from 'express';
import signup from '../controllers/auth/signup';
import login from '../controllers/auth/login';
import logout from '../controllers/auth/logout';
import sendToken from '../controllers/auth/sendToken';
import passwordRouter from './password';
import catcher from '../errors/catcher';

const router = Router();

router.use('/password', passwordRouter);

router.get('/logout', logout);
router.post('/signup', catcher(signup));
router.get('/login', catcher(login));

router.use(sendToken);

export default router;
