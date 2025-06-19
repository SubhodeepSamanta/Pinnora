import express from 'express'
import { getComments } from '../controllers/comment.controller.js';

const router= express.Router();

router.get('/:postId',getComments);

export default router;