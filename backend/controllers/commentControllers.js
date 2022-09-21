const { Comments } = require('../models');

//get all comment
const getAllComments = async (req, res) => {
    try {
        const {id} = req.params;
        const commentData = await Comments.findAll({ where: {BlogId: id} });
        res.json({ commentData });
    } catch (error) {
        console.log(error);
    }
}

//Post comment
const createComment = async (req, res) => {
    try {
        const { userName, comment } = req.body;
        const {id} = req.params;

        const newComment = await Comments.create({
            userName, 
            comment,
            UserId: req.user.id,
            BlogId: id
        })
        res.json({ newComment });
        // res.json({mess: "Testing"})
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllComments,
    createComment
}