import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { SITE_URL } from '../Constants';
import Loading from './Loading';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
  const [logoURL, setLogoURL] = useState('');
  const [anchorElUser, setAnchorElUser] = useState(null);

  useEffect(() => {
    fetchSiteLogo();
  }, []);

  useEffect(() => {
    if (isAuthenticated && user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [isAuthenticated, user]);

  const fetchSiteLogo = () => {
    fetch(`${SITE_URL}/wp-json/an/images/sitelogo`)
      .then(response => response.json())
      .then(resdata => {
        setLogoURL(resdata.data);
      })
      .catch(error => {
        console.error('Error fetching sitelogo:', error);
      });
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
    localStorage.removeItem('user');
  };

  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (isLoading) {
    return <Loading />;
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { md: 'flex' }, mr: 1 }}>
            <img
              src={logoURL}
              alt="Logo"
              style={{ height: '40px', cursor: 'pointer' }}
              onClick={() => navigate('/')}
            />
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Moucasa LMS
          </Typography>

          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'left' }}>
            <Stack direction="row" spacing={2}>
              <Button color="inherit" onClick={() => navigate('/')} variant="outlined">Home</Button>
              <Button color="inherit" onClick={() => navigate('/contact')} variant="outlined">Contact</Button>
            </Stack>
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            {isAuthenticated || storedUser ? (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={(e) => setAnchorElUser(e.currentTarget)} sx={{ p: 0 }}>
                    <Avatar alt={storedUser ? storedUser.name : user.name} src={storedUser ? storedUser.picture : user.picture} />
                  </IconButton>
                </Tooltip>
                <Typography variant="body1" color="inherit" sx={{ ml: 1 }}>
                  {storedUser ? storedUser.email : user.email}
                </Typography>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  keepMounted
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  open={Boolean(anchorElUser)}
                  onClose={() => setAnchorElUser(null)}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={setting === 'Logout' ? handleLogout : () => setAnchorElUser(null)}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Button color="inherit" onClick={() => loginWithRedirect()}>Login</Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
