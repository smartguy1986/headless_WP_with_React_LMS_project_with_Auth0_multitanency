import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { SITE_URL } from '../Constants';
// import { LogoutButton } from './ActionButtons';

const Header = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
  const [logoURL, setLogoURL] = useState('');

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
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => navigate('/')}>
          <MenuIcon />
        </IconButton>
        <img
          src={logoURL}
          alt="Logo"
          style={{ marginLeft: 10, marginRight: 10, height: '40px' }}
          onClick={() => navigate('/')}
        />
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Website
        </Typography>
        <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
        <Button color="inherit" onClick={() => navigate('/contact')}>Contact</Button>
        {isAuthenticated || storedUser ? (
          <div>
            <h4>{storedUser ? storedUser.email : user.email}</h4>
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </div>
        ) : (
          <Button color="inherit" onClick={() => loginWithRedirect()}>Login</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
