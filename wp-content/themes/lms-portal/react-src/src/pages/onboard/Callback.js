import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const { handleRedirectCallback, isAuthenticated, isLoading, error } = useAuth0();
  const navigate = useNavigate();

  // Function to handle redirection based on authentication status
  const handleRedirection = () => {
    if (isAuthenticated) {
      console.log("Authenticated: Navigating to /");
      navigate('/', { replace: true });
    } else {
      console.log("Not authenticated: Navigating to /signup");
      navigate('/signup', { replace: true });
    }
  };

  useEffect(() => {
    // Handle Auth0 redirect callback
    const handleAuthCallback = async () => {
      try {
        await handleRedirectCallback();
        console.log("Auth0 callback handled successfully");
        handleRedirection(); // Call redirection after handling callback
      } catch (err) {
        console.error("Error during Auth0 callback:", err);
        navigate('/signup', { replace: true });
      }
    };

    handleAuthCallback();
  }, [handleRedirectCallback, navigate]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      console.log("Not authenticated: Navigating to /signup");
      handleRedirection(); // Handle redirection based on current authentication status
    }
  }, [isAuthenticated, isLoading, handleRedirection]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error during Auth0 callback: {error.message}</div>
      ) : (
        <div>Redirecting...</div>
      )}
    </div>
  );
};

export default Callback;