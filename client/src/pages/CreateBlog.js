import React, { useEffect, useState } from 'react';
import { useBlog } from '../hooks/useBlogContext';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const { dispatch } = useBlog();
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        //handle to prevent request from form 
        e.preventDefault();
        if (!user) {
            alert('You need to login to create blog');
            navigate('/register');
        } else {
                const respone = await fetch('/blogs/create', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${user.token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        title,
                        body,
                        author: user.userName
                    })
                });

                const json = await respone.json();

                if (respone.ok) {
                    alert(
                        `Create success blog ${title} to database`
                    );
                    setBody('');
                    setTitle('');
                    dispatch({ type: 'CREATE_BLOG', payload: json.newBlog });
                    navigate('/blogs');
                } else {
                    console.log(json.error);
                }
        }
    }

    return (
        <>
            <Box sx={{ maxWidth: '600px', margin: '100px auto 0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography textAlign='center' variant='h6' sx={{ borderBottom: '1px solid rgba(0,0,0,0.5)', paddingBottom: '3px' }}>
                    Create your blog to share knowledge
                    <br />
                    and motivate for every one
                </Typography>

                <form action='/blogs/create' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} onSubmit={handleSubmit}>
                    <TextField required label="Title" variant="outlined" sx={{ mt: '30px' }}
                        value={title}
                        onChange={(evt) => {
                            setTitle(evt.target.value);
                        }}
                    />
                    <TextField
                        required
                        sx={{ mt: '30px' }}
                        id='outlined-multiline-static'
                        label="Body"
                        multiline
                        rows={4}
                        value={body}
                        onChange={(evt) => setBody(evt.target.value)}
                    />
                    <Button type='submit' variant="contained" color="error" sx={{ margin: '30px auto 30px auto', width: '200px' }}>
                        Submit
                    </Button>
                </form>
            </Box>
        </>
    )
}

export default CreateBlog