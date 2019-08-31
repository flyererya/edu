import express from 'express';
import * as indexController from '../controllers/index';

const router = express.Router();

router.get('/index', indexController.showIndex);

export default router;