import Answer from '../models/Answer.js';
import Question from '../models/Question.js';

export const addAnswer = async (req, res) => {
  try {
    const question = await Question.findById(req.params.questionId);
    if (!question) return res.status(404).json({ message: 'Question not found' });

    const answer = new Answer({
      content: req.body.content,
      user: req.userId,
      question: question._id
    });

    await answer.save();

    question.answers.push(answer._id);
    await question.save();

    res.status(201).json(answer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
