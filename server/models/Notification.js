import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  message: String,
  isRead: { type: Boolean, default: false },
  link: String
});

export default mongoose.model('Notification', notificationSchema);
