const express = require('express');

const requireAuth = require('../middlewares/requireAuth');
const { getAllBlogs, createBlog, getDetailBlog, deleteBlog } = require('../controllers/blogControllers');

const router = express.Router();

router.get('/', getAllBlogs);

router.get('/:id', getDetailBlog);

//require auth for and activity to blog
router.use(requireAuth);

router.post('/create', createBlog);

router.delete('/:id', deleteBlog);




module.exports = router;