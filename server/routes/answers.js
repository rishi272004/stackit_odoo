import express from 'express';
import auth from '../middleware/auth.js';
import { addAnswer } from '../controllers/answerController.js';

const router = express.Router();

router.post('/:questionId', auth, addAnswer);

export default router;
