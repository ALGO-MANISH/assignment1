const express = require('express');
const commentController = require('../controllers/commentController');
const auth = require('../middleware/auth');

const router = express.Router();

router.put('/:id', auth, commentController.updateComment);
router.delete('/:id', auth, commentController.deleteComment);
router.post('/:id/like', auth, commentController.likeComment);
router.post('/:id/reply', auth, commentController.replyToComment);

module.exports = router;
