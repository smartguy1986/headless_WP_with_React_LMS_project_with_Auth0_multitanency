import React from 'react';
import { AppBar, Box, Toolbar, Typography, Grid, Container } from '@mui/material';
import Weather from '../inc/weather-info/Weatherinfo';

const Footer = () => {
  return (
    <AppBar position="static" className="footer">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={6}>
                <Typography variant="body1" color="inherit">
                  © 2024 My Website. All rights reserved.
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Weather />
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
