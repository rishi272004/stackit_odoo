import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  title: String,
  description: String,
  tags: [String],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  answers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }]
});

export default mongoose.model('Question', questionSchema);
