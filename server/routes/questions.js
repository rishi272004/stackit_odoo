import express from 'express';
import auth from '../middleware/auth.js';
import { askQuestion, getQuestions, getQuestion } from '../controllers/questionController.js';

const router = express.Router();

router.post('/', auth, askQuestion);
router.get('/', getQuestions);
router.get('/:id', getQuestion);

export default router;
