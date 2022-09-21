const { Blogs } = require('../models');

//get all blog
const getAllBlogs = async (req, res) => {
    try {
        // console.log(req.user.id)
        const blogsData = await Blogs.findAll();
        res.json({ blogsData })
    } catch (error) {
        console.log(error);
    }
}

//get single blog detail
const getDetailBlog = async (req, res) => {
    try {
        const { id } = req.params;
        //find blog by id
        console.log(id);
        const blogById = await Blogs.findByPk(id);
        if(!blogById){
            return res.json({error: "Can not find blog"});
        }else{
            res.json(blogById);
        }

    } catch (error) {
        console.log(error);
    }
}

//create blog
const createBlog = async (req, res) => {
    try {
        const { body, title, author } = req.body;

        // console.log({
        //     body, 
        //     title, 
        //     author,
        //     UserId: req.user.id
        // })

        const newBlog = await Blogs.create({ 
            body, 
            title, 
            author,
            UserId: req.user.id
        });
        res.json({ newBlog });
    } catch (error) {
        console.log(error);
    }
}

//delete blog
const deleteBlog = async (req, res) => {
    try {
        const {id} = req.params;
        const blogDelete = await Blogs.findByPk(id);
        if(blogDelete){
            await Blogs.destroy({
                where: {
                    id: id

                }
            });

            return res.json({ blogDelete });
        }else{
            return res.json({ error: "Can not find blog to delete" });
        }

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllBlogs,
    createBlog,
    getDetailBlog,
    deleteBlog
}