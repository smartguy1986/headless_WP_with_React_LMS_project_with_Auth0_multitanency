import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { Posts } from './Posts';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const { isAuthenticated, isLoading, handleRedirectCallback, error } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuth = async () => {
      if (isLoading) return; // Wait until loading is done

      if (!isAuthenticated) {
        if (window.location.search.includes('code=') || window.location.search.includes('error=')) {
          // Handle the Auth0 callback
          try {
            await handleRedirectCallback();
          } catch (err) {
            console.error("Error during Auth0 callback:", err);
            navigate('/signup');
          }
        } else {
          // Redirect to Auth0 login if not authenticated
          navigate('/signup');
        }
      } else {
        // Redirect to the home page if already authenticated
        navigate('/home');
      }
    };

    handleAuth();
  }, [isAuthenticated, isLoading, handleRedirectCallback, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
