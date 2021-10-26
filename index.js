import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import postsRouter from './routes/posts.js';
import userRouter from './routes/user.js';

const app = express();

app.use(express.json({ limit: "30mb", extended: true}));
app.use(express.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postsRouter);
app.use('/user', userRouter);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server online on port: ${PORT}`)))
  .catch(error => console.log(error.message));
