import express from 'express'
import { getPin, getPins, createPin, interactionCheck,interact} from '../controllers/pin.controller.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router= express.Router();

router.get('/', getPins);
router.get('/:id',getPin);
router.post('/',verifyToken,createPin);
router.get('/interaction-check/:id',interactionCheck);
router.post('/interaction/:id',verifyToken,interact);

export default router;