import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: '0', xs: '70px' },
            ml: { sm: '50px' }
        }} position='relative' p='20px'>
            <Typography
                color="#FF2625"
                fontWeight="600"
                fontSize="26px"
                paddingTop='200px'
                id='herobanner-firstText'
            >
                Fitness Club
            </Typography>
            <Typography
                fontWeight={700}
                sx={{ fontSize: { lg: '44px', xs: '24px' } }}
                mb="23px"
                mt="30px"
                className='herobanner-secondText'
            >
                Sweat, Smile <br /> and Repeat
            </Typography>
            <Typography fontSize="22px" lineHeight="35px" mb={3} className='herobanner-secondText'>
                Check out the most effective exercises
            </Typography>
            <Button
                variant="contained"
                color='error'
                href='register'
                mb="4px"
                size='large'
                sx={{ backgroundColor: "#ff2625", padding: "10px" }}
            >
                Join with Us
            </Button>
            <Typography
                fontWeight={600}
                color="#ff2625"
                sc={{
                    opacity: 0.9,
                    display: { lg: 'block', xs: 'none' }
                }}
                fontSize="130px"
                id='herobanner-thirdText'
            >
                Exercise
            </Typography>
            <img src={HeroBannerImage} alt="banner" id='hero-banner-img' />
        </Box>
    )
}

export default HeroBanner