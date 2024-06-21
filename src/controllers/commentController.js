const Comment = require('../models/comment');
const Discussion = require('../models/discussion');

exports.updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    await Comment.update({ text }, { where: { id } });
    res.status(200).json({ message: 'Comment updated successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    await Comment.destroy({ where: { id } });
    res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.likeComment = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;
    const comment = await Comment.findByPk(id);
    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    comment.likes = [...comment.likes, userId];
    await comment.save();
    res.status(200).json({ message: 'Comment liked successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.replyToComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    const userId = req.user.userId;
    const comment = await Comment.findByPk(id);
    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    comment.replies = [...comment.replies, { text, authorId: userId, createdOn: new Date(), likes: [] }];
    await comment.save();
    res.status(201).json({ message: 'Reply added successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
