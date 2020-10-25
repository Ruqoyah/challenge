import express from 'express';
import { loadRequest, getRequests } from '../controllers/index'

const router = express.Router();


router.post('/api/requests', loadRequest);

router.get('/api/requests', getRequests);

export default router;
