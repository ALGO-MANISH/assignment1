const express = require('express');
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', userController.createUser);
router.put('/:id', auth, userController.updateUser);
router.delete('/:id', auth, userController.deleteUser);
router.get('/', auth, userController.listUsers);
router.get('/search', auth, userController.searchUsers);
router.post('/login', userController.loginUser);
router.post('/:id/follow', auth, userController.followUser);

module.exports = router;
