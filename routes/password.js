import { Router } from 'express';
import forgot from '../controllers/password/forgot';
import reset from '../controllers/password/reset';

const router = Router();

router.get('/forgot', forgot);
router.get('/reset', reset);

export default router;
