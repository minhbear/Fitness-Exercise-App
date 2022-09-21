import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const ExerciseVideos = ({ exerciseVideos, name }) => {
    if (!exerciseVideos.length) return (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
            <CircularProgress color="inherit" />
        </Box> 
    )

    return (
        <Box sx={{ mt: { lg: '50px', xs: '20px' } }} p ='20px'>
            <Typography variant='h4' mb='33px' textAlign='center'>
                Watch <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
            </Typography>
            <Stack justifyContent="center" flexWrap="wrap" alignItems="center"
                sx={{
                    flexDirection: { lg: 'row' },
                    gap: { lg: '50px', xs: '0' }
                }}
            >
                {exerciseVideos.slice(0, 6)?.map((item, index) => (
                    <a
                        key={index}
                        className='exercise-video'
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        target="blank"
                        rel="noreferrer"
                    >
                        <img class='exrecise-detail-img' src={item.video.thumbnails[0].url} alt={item.video.title} style={{ borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }}/>
                        <Box sx={{ padding: '0 10px' }}>
                            <Typography variant='h5' color="#000" sx={{ fontSize: '1.3rem', marginBottom: '10px' }}>
                                {item.video.title}
                            </Typography>
                            <Typography variant='h6' color="#000" sx={{ fontSize: '1rem' }}>
                                {item.video.channelName}
                            </Typography>
                        </Box>
                    </a>
                ))}
            </Stack>
        </Box>
    )
}

export default ExerciseVideos;
