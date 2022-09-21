const express = require('express');

const requireAuth = require('../middlewares/requireAuth');
const { getAllComments, createComment } = require('../controllers/commentControllers');

const router = express.Router();

//get all comment
router.get('/:id', getAllComments);

//require auth for bost comment in each blog
router.use(requireAuth);

//create comment
router.post('/:id', createComment);

module.exports = router;