import React, { useEffect, useState } from 'react';
import { Box, Typography, Stack, TextField, IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';


function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${ name.split(' ').length == 1 ? '' :name.split(' ')[1][0]}`,
  };
}

const Comments = ({ id }) => {
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const respone = await fetch(`/comments/${id}`);
      const json = await respone.json();

      if (respone.ok) {
        setCommentList(json.commentData.reverse());
      }
    }

    fetchData()
  }, []);

  const handleSubmit = async(evt) => {
    evt.preventDefault();
    if(!user){
      alert('You need to login to post comment');
      navigate('/register');
    }else{
      const respone = await fetch(`/comments/${id}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${user.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName: user.userName,
          comment: comment
        })
      });

      const json = await respone.json();
      setCommentList([json.newComment, ...commentList]);
      setComment('');
    }
  }

  return (
    <Box sx={{ display: 'flex', gap: '100px' }}>
      <Stack sx={{ width: '45%', height: '300px', overflowY: 'scroll', justifyContent: 'center' }} spacing={1}>
        {commentList.map(comment => (
          <Stack direction='row' spacing={2} sx={{ alignItems: 'center' }} key={comment.id}>
            <Avatar {...stringAvatar(comment.userName)} />
            <Typography sx={{ display: 'inline-block' }}>{comment.comment}</Typography>
          </Stack>
        ))}
      </Stack>
      <Stack sx={{ width: '45%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <form action={`/comments/${id}`} onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Stack direction='row' spacing={2} sx={{ width: '100%' }}>
            <TextField variant="outlined" label="Comment" value={comment} onChange={(evt) => setComment(evt.target.value)} sx={{ width: '350px' }}/>
            <IconButton type='submit'>
              <SendIcon />
            </IconButton>
          </Stack>
        </form>
      </Stack>
    </Box>
  )
}

export default Comments