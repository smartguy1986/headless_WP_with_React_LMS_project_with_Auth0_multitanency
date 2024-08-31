import React from 'react';
import { Box } from '@mui/material';

const Loading = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '200%',
        height: '200%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: Add a semi-transparent background
        zIndex: 9999, // Ensure it's on top of other content
      }}
    >
      <img
        src="https://127.0.0.1/moucasa/wp-content/uploads/2024/08/Loader-unscreen.gif"
        alt="Loading..."
        style={{ width: '150px', height: '150px' }} // Adjust size as needed
      />
    </Box>
  );
};

export default Loading;
