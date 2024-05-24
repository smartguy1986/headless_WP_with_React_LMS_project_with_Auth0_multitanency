import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Weather from '../inc/weather-info/Weatherinfo';

const Footer = () => {
  return (
    <Box
      position="fixed"
      bottom={0}
      width="100%"
      bgcolor="#01204E"
      color="white"
      textAlign="center"
      py={3}
    >
      <div variant="body1">
        <Grid container spacing={2}>
          <Grid xs={6}>© 2024 My Website. All rights reserved.</Grid>
          <Grid xs={6}><Weather /></Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default Footer;
