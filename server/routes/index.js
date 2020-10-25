import express from 'express';
import { createBuyRequest, createSellRequest } from '../controllers/index'

const router = express.Router();


router.post('/api/buy-requests', createBuyRequest);

router.post('/api/sell-requests', createSellRequest);

export default router;
