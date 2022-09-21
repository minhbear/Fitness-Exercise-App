import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading, setError } = useLogin();


    const handleSubmit = (evt) => {
        if (email === '' || password === '') {
            alert(`Email and Password field must be full`);
            setEmail('');
            setPassword('');
            setError(null);
        } else {
            evt.preventDefault();
            login(email, password);
        }
    }


    return (
        <form action="/auth/login" onSubmit={handleSubmit}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                minWidth: '400px'
            }}>
                {/* <TextField id="filled-basic" label="Username" variant="filled" sx={{ mb: '30px' }} value={userName} onChange={(evt) => setUserName(evt.target.value)}/> */}
                <TextField required id="filled-basic" label="Email" variant="filled" sx={{ mb: '30px' }}
                    value={email}
                    onChange={(evt) => {
                        setEmail(evt.target.value);
                        setError(null)}
                    }
                    error={error !== null && (error.part === 'email' || error.part === 'email and password')}
                    helperText={error !== null && (error.part === 'email' || error.part === 'email and password') ? error.error : ""}
                />
                <TextField required type='password' id="filled-basic" label="Password" variant="filled" sx={{ mb: '30px' }}
                    value={password}
                    onChange={(evt) => {
                        setPassword(evt.target.value);
                        setError(null)}
                    }
                    error={error !== null && error.part === 'email and password'}
                    helperText={error !== null && error.part === 'email and password' ? error.error : ""}
                />

                <Button onClick={handleSubmit} disabled={isLoading} variant="contained" color="error">Login</Button>
            </Box>
        </form>
    )
}

export default Login