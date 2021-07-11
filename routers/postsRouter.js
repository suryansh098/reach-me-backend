const express = require('express');

const postsRouter = express.Router();

// http://localhost:5000/posts

postsRouter.get('/', (req, res) => {
  res.send('This works fine!');
});

exports.postsRouter = postsRouter;