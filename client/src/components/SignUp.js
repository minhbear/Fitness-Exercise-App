import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material';
import { useRegister } from '../hooks/useRegister';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('')
    const { register, error, isLoading, setError } = useRegister();

    const handleSubmit = (evt) => {
        if (email === '' || password === '' || userName === '') {
            alert(`Email, Username and Password field must be full`);
            setEmail('');
            setPassword('');
            setUserName('');
            setError(null);
        } else {
            evt.preventDefault();
            register(email, userName, password);
        }
    }


    return (
        <form action="/auth/login" onSubmit={handleSubmit}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                minWidth: '400px',
            }}>
                <TextField required id="filled-basic" label="Username" variant="filled" sx={{ mb: '30px' }} 
                    value={userName} 
                    onChange={(evt) => setUserName(evt.target.value)}
                    error={error !== null && (error.part === 'userName')}
                    helperText={error !== null && (error.part === 'userName') ? error.error : ""}
                />
                <TextField required id="filled-basic" label="Email" variant="filled" sx={{ mb: '30px' }}
                    value={email}
                    onChange={(evt) => {
                        setEmail(evt.target.value);
                        setError(null)}
                    }
                    error={error !== null && (error.part === 'email')}
                    helperText={error !== null && (error.part === 'email') ? error.error : ""}
                />
                <TextField required type='password' id="filled-basic" label="Password" variant="filled" sx={{ mb: '30px' }}
                    value={password}
                    onChange={(evt) => setPassword(evt.target.value)}
                />

                <Button onClick={handleSubmit} disabled={isLoading} variant="contained" color="error">Register</Button>
            </Box>
        </form>
    )
}

export default Login