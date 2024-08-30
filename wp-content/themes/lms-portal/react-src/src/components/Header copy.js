import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import { SITE_URL } from '../Constants';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
  const [logoURL, setLogoURL] = useState('');

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
    return <div>Loading...</div>;
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
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
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Moucasa LMS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  {/* <Typography sx={{ textAlign: 'center' }}>{page}</Typography> */}
                  <Button color="inherit" variant="outlined" onClick={() => navigate('/')}>Home</Button>
                  <Button color="inherit" variant="outlined" onClick={() => navigate('/contact')}>Contact</Button>
                  {isAuthenticated || storedUser ? (
                    <Button color="inherit" variant="outlined" onClick={() => navigate('/contact')}>
                      <div>
                        <h4>{storedUser ? storedUser.email : user.email}</h4>
                        <Button color="inherit" variant="outlined" onClick={handleLogout}>Logout</Button>
                      </div>
                    </Button>
                  ) : (
                    <Button color="inherit" variant="outlined" onClick={() => loginWithRedirect()}>Login</Button>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <img
              src={logoURL}
              alt="Logo"
              style={{ height: '40px', cursor: 'pointer' }}
              onClick={() => navigate('/')}
            />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Moucasa LMS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  {/* <Typography sx={{ textAlign: 'center' }}>{setting}</Typography> */}
                  <Button color="inherit" variant="outlined" onClick={() => navigate('/')}>Home</Button>
                  <Button color="inherit" variant="outlined" onClick={() => navigate('/contact')}>Contact</Button>
                  {isAuthenticated || storedUser ? (
                    <Button color="inherit" variant="outlined" onClick={() => navigate('/contact')}>
                      <div>
                        <h4>{storedUser ? storedUser.email : user.email}</h4>
                        <Button color="inherit" variant="outlined" onClick={handleLogout}>Logout</Button>
                      </div>
                    </Button>
                  ) : (
                    <Button color="inherit" variant="outlined" onClick={() => loginWithRedirect()}>Login</Button>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
