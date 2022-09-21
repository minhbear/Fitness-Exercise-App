import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Stack, Box, Typography } from '@mui/material'
import HorizontalScrollbar from '../components/HorizontalScrollbar';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    return (
        <Box sx={{ mt: { lg: '100px', xs: '0' } }} >
            <Typography variant='h3' mb={5} textAlign='center'>Exercies that target the same muscle group</Typography>
            <Stack direction="row" sx={{ p: '2', position: 'relative', justifyContent: 'center' }}>
                {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> :
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                        <CircularProgress color="inherit" />
                    </Box>
                }
            </Stack>
            <Typography variant='h3' mb={5} textAlign='center'>Exercies that target the same equipment</Typography>
            <Stack direction="row" sx={{ p: '2', position: 'relative', justifyContent: 'center' }}>
                {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> :
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                        <CircularProgress color="inherit" />
                    </Box>
                }
            </Stack>
        </Box>
    )
}

export default SimilarExercises;