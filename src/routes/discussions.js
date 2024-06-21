const express = require('express');
const discussionController = require('../controllers/discussionController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, discussionController.createDiscussion);
router.put('/:id', auth, discussionController.updateDiscussion);
router.delete('/:id', auth, discussionController.deleteDiscussion);
router.get('/', auth, discussionController.listDiscussions);
router.post('/:id/like', auth, discussionController.likeDiscussion);
router.post('/:id/comment', auth, discussionController.commentOnDiscussion);

module.exports = router;
