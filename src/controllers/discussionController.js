const Discussion = require('../models/discussion');
const User = require('../models/user');

exports.createDiscussion = async (req, res) => {
  try {
    const { text, image, hashtags } = req.body;
    const authorId = req.user.userId;
    const discussion = await Discussion.create({ text, image, hashtags, authorId });
    res.status(201).json(discussion);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateDiscussion = async (req, res) => {
  try {
    const { id } = req.params;
    const { text, image, hashtags } = req.body;
    await Discussion.update({ text, image, hashtags }, { where: { id } });
    res.status(200).json({ message: 'Discussion updated successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteDiscussion = async (req, res) => {
  try {
    const { id } = req.params;
    await Discussion.destroy({ where: { id } });
    res.status(200).json({ message: 'Discussion deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.listDiscussions = async (req, res) => {
  try {
    const { hashtag, text } = req.query;
    const whereClause = {};
    if (hashtag) {
      whereClause.hashtags = { [sequelize.Op.contains]: [hashtag] };
    }
    if (text) {
      whereClause.text = { [sequelize.Op.like]: `%${text}%` };
    }
    const discussions = await Discussion.findAll({ where: whereClause });
    res.status(200).json(discussions);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.likeDiscussion = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;
    const discussion = await Discussion.findByPk(id);
    if (!discussion) {
      return res.status(404).json({ error: 'Discussion not found' });
    }
    discussion.likes = [...discussion.likes, userId];
    await discussion.save();
    res.status(200).json({ message: 'Discussion liked successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.commentOnDiscussion = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    const userId = req.user.userId;
    const discussion = await Discussion.findByPk(id);
    if (!discussion) {
      return res.status(404).json({ error: 'Discussion not found' });
    }
    discussion.comments = [...discussion.comments, { text, authorId: userId, createdOn: new Date(), likes: [], replies: [] }];
    await discussion.save();
    res.status(201).json({ message: 'Comment added successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};



