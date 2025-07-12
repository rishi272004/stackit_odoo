import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json([]); // placeholder
});

export default router;
