import express from 'express'
import { test } from '../controllers/comment.controller.js';

const router= express.Router();

router.get('/',test);

export default router;