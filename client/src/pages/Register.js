import React, { useState } from 'react'
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import { Box } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

import bgRegister from '../assets/images/bgRegister.png'


const Register = () => {

  //animation choose registrer - login
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box
      sx={{
        maxWidth: '1000px',
        margin: '100px auto 200px auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '10px 10px 30px rgba(0,0,0,0.5)',
        borderRadius: '10px',
        padding: '50px'
      }}
    >
      <Box>
        <img src={bgRegister} alt="" />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <FitnessCenterIcon sx={{ fontSize: '100px', marginTop: '10px' }}/>

        <Box sx={{ width: '100%', typography: 'body1', marginTop: '10px' }} >
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} centered TabIndicatorProps={{style: {background: '#d32f2f'}}} textColor="inherit">
                <Tab label={<span style={{ fontSize: '24px' }}>Login</span>} value="1" />
                <Tab label={<span style={{ fontSize: '24px' }}>Register</span>} value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Login />
            </TabPanel>
            <TabPanel value="2">
              <SignUp />
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Box>
  )
}

export default Register