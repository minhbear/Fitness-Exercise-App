import { Link } from 'react-router-dom';
import { Stack, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';

import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout'

import Logo from '../assets/images/Logo.png';
import Avatar from '../assets/icons/user-avatar.png';
import '../index.css';

export const Navbar = () => {
    const { userName } = useAuthContext();
    const { logout } = useLogout();

    const handleClick = () => {
        logout()
    }

    return (
        <Stack
            id="navbar-contain"
            direction='row'
            justifyContent='space-around'
            sx={{
                gap: { sm: '122px', xs: '40px' },
                height: '100px',
                justifyContent: 'none',
                alignItems: 'center',
                position: 'relative'
            }}
            px="20px"
        >
            <Link to='/'>
                <img src={Logo} alt="logo"
                    style={{
                        width: '48px', height: '48px',
                        margin: '0 20px'
                    }}
                />
            </Link>
            <div id='navbar'>
                <div id='navbar-list'>
                    <Link to="/" style={{
                        textDecoration: 'none',
                        margin: 'auto 0 auto 0'
                    }}>
                        <p className='navbar-element'>Home</p>
                    </Link>
                    <Link to="/blogs" style={{
                        textDecoration: 'none',
                        margin: 'auto 0 auto 0'
                    }}>
                        <p className='navbar-element'>Blog</p>
                    </Link>
                    <Link to="/blogs/create" style={{
                        textDecoration: 'none',
                        margin: 'auto 0 auto 0'
                    }}>
                        <p className='navbar-element'>Create Blog</p>
                    </Link>
                </div>
                {
                    userName ?
                        <div id='navbar-user'>
                            <div className="avatar">
                                <img className="avatar__image" src={Avatar} />
                            </div>
                            <p>{userName}</p>
                            <IconButton aria-label="delete" onClick={handleClick}>
                                <LogoutIcon />
                            </IconButton>
                        </div> :
                        <Stack direction="row" spacing={2}>
                            <Button variant="outlined" id='login-btn'>
                                <Link to='/register' style={{ textDecoration: 'none', color: '#363333' }}>
                                    Login
                                </Link>
                            </Button>
                            <Button variant="contained" color="error">
                                <Link to='/register' style={{ textDecoration: 'none', color: 'white' }}>
                                    Register
                                </Link>
                            </Button>
                        </Stack>
                }
            </div>
        </Stack>
    )
}