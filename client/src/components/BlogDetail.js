import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Comments from './Comments';
import { Box, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuthContext } from '../hooks/useAuthContext';
import { useBlog } from '../hooks/useBlogContext';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const { userName } = useAuthContext();
  const { dispatch } = useBlog();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(`/blogs/${id}`);

      const json = await response.json();
      setBlog(json);
    }

    fetchBlog();
  }, []);

  const handleDelete = async (evt) => {
    evt.preventDefault();
    const respone = await fetch(`/blogs/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`,
        'Content-Type': 'application/json'
      },
    });

    const json = await respone.json();
    if(respone.ok){
      alert(`Delete success blog ${json.blogDelete.title} in database` );
      navigate('/blogs');
      dispatch({type: 'DELETE_BLOG', payload: json.blogDelete.id});
    }
  }

  return (
    <Box sx={{ width: '90%', margin: '100px auto 100px auto', position: 'relative' }}>
      {
        blog ?
          <Box sx={{ padding: '30px', boxShadow: '10px 10px 20px rgba(0,0,0,0.5)', borderRadius: '10px', marginBottom: '40px'}}>
            <Typography variant='h6' sx={{ fontWeight: '700', fontSize: '1.75rem', color: 'rgba(0,0,0,0.8)' }}>{blog.title}</Typography>
            <Typography variant='subtitle1' sx={{ marginLeft: '12px' }}>{blog.author}</Typography>
            <Box marginTop='10px' variant='body1' sx={{ paddingTop: '10px', borderTop: '1px solid rgba(0,0,0,0.5)', textAlign: 'center', fontSize: '1.2rem' }}>
              {blog.body}
            </Box>
            {
              userName === blog.author &&
              <IconButton aria-label="delete" size="large" sx={{ position: 'absolute', top: '0', right: '0', fontSize: '35px' }} onClick={handleDelete}>
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            }
          </Box>
          : <Typography>Please waiting .... :{':>>>'}</Typography>
      }
      <Comments id={id}/>
    </Box>
  )
}

export default BlogDetail