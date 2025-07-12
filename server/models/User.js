import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  notifications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Notification' }]
});

export default mongoose.model('User', userSchema);
