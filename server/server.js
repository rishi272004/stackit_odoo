import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import questionRoutes from './routes/questions.js';
import answerRoutes from './routes/answers.js';
import authRoutes from './routes/auth.js';
import notificationRoutes from './routes/notifications.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/questions', questionRoutes);
app.use('/api/answers', answerRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/notifications', notificationRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
  })
  .catch(err => console.error(err));
