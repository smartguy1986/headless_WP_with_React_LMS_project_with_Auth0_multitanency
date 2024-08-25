import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const { handleRedirectCallback, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        await handleRedirectCallback();
        if (isAuthenticated) {
          navigate('/home');
        } else {
          navigate('/signup');
        }
      } catch (error) {
        console.error("Error during Auth0 callback:", error);
        navigate('/signup');
      }
    };

    handleAuthCallback();
  }, [handleRedirectCallback, isAuthenticated, navigate]);

  return <div>Loading...</div>;
};

export default Callback;
