import React, { useEffect } from 'react'
import { useBlog } from '../hooks/useBlogContext';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Blog = () => {
    const { blogs, dispatch } = useBlog();

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetch('/blogs');
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'GET_ALL_BLOGS', payload: json.blogsData })
            }
        }

        fetchBlogs();
    }, [dispatch]);

    return (
        <Box sx={{ margin: '100px auto 100px auto', maxWidth: '800px' }}>
            {blogs === null ?
                <Typography variant='h3'>No blogs has post </Typography> :
                <Box>
                    <Typography variant='h5' sx={{ fontWeight: 700, fontFamily: 'emoji' }}> All Blogs </Typography>
                    {
                        blogs.map(blog => (
                            <Link to={`/blogs/${blog.id}`} className='blog-single' key={blog.id}>
                                <h3 className='title'>
                                    {blog.title}
                                </h3>
                                <p className='author'>
                                    {blog.author}
                                </p>
                            </Link>
                        ))
                    }
                </Box>
            }
        </Box>
    )
}

export default Blog