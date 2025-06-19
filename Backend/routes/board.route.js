import express from 'express'
import { getBoards } from '../controllers/board.controller.js';

const router= express.Router();

router.get('/:userId',getBoards);

export default router;