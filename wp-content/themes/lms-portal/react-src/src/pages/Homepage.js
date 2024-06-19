import React from 'react';
import { Typography } from '@mui/material';
import { Posts } from './Posts';

const Homepage = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Home Page
      </Typography>
      <Typography variant="body1">
        Welcome to the home page!
      </Typography>
      <div>
        <Posts />
      </div>
    </div>
  );
};

export default Homepage;