import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { SITE_URL } from '../Constants';

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

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => navigate('/')}>
          <MenuIcon />
        </IconButton>
        <img
          src={logoURL}
          alt="Logo"
          style={{ marginLeft: 10, marginRight: 10, height: '40px' }} // Adjust styles as needed
          onClick={() => navigate('/')}
        />
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Website
        </Typography>
        <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
        <Button color="inherit" onClick={() => navigate('/contact')}>Contact</Button>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
