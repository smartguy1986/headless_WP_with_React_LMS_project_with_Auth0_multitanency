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
import { LogoutButton } from './ActionButtons';

const Header = () => {

  const navigate = useNavigate();
  const [logoURL, setLogoURL] = useState('');

  useEffect(() => {
    fetchSiteLogo();
  }, []);

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

  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

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
        {isAuthenticated ? (
          <div>
            <img src={user.picture} alt={user.name} style={{ height: '40px', borderRadius: '50%', marginRight: '10px' }} />
            <h2>{user.name}</h2>
            <LogoutButton />
          </div>
        ) : (
          <Button color="inherit" onClick={() => loginWithRedirect()}>Login</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
