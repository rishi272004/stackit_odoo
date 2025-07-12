import Question from '../models/Question.js';

export const askQuestion = async (req, res) => {
  try {
    const question = new Question({
      ...req.body,
      user: req.userId
    });
    await question.save();
    res.status(201).json(question);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getQuestions = async (req, res) => {
  const questions = await Question.find().populate('user');
  res.json(questions);
};

export const getQuestion = async (req, res) => {
  const question = await Question.findById(req.params.id)
    .populate('user')
    .populate('answers');
  res.json(question);
};
