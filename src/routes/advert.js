import express from 'express';
import Advert from '../models/advert';
import * as advertController from '../controllers/advert'


const router = express.Router();
//增
router.post('/advert/add', advertController.advertAdd);

//查所有
router.get('/advert/list', advertController.advertQueryAll);

//查单个
router.get('/advert/one/:adverId', advertController.advertQueryOne);

//改
router.post('/advert/edit', advertController.advertEdit);

//删
router.get('/advert/remove/:adverId', advertController.advertRemoveOne);

//展示广告页
router.get('/advert', advertController.showAdvertList);

//添加广告
router.get('/advert/add', advertController.showAdvertAdd);

export default router;