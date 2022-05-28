const express = require('express');

const diariesController = require('../controllers/diariesController.js');

const router = express.Router();

// GET /feed/posts
router.get('/posts', diariesController.getDiaries);

// POST /feed/post
router.post('/post', diariesController.createDiary);

module.exports = router;
