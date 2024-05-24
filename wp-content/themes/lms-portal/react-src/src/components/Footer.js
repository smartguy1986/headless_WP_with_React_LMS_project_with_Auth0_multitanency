import React from 'react';
import { Box, Typography } from '@mui/material';

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
      <Typography variant="body1">
        © 2024 My Website. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
