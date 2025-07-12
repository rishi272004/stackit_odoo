import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema({
  content: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
  votes: [{ userId: String, vote: Number }]
});

export default mongoose.model('Answer', answerSchema);
