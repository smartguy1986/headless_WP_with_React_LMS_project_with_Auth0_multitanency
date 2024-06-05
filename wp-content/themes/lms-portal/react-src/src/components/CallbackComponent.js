// CallbackComponent.js
import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SITE_URL } from '../Constants';

const CallbackComponent = () => {
    const { isAuthenticated, getAccessTokenSilently, user } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        const handleLogin = async () => {
            if (isAuthenticated && user) {
                try {
                    const token = await getAccessTokenSilently();
                    const response = await axios.post(`${SITE_URL}/wp-json/an/auth0/login`, {
                        token: token,
                    });
                    console.log(response);
                    document.cookie = `wp_token=${response.data.token}; path=/; secure; samesite=strict`;
                    navigate('/moucasa');
                } catch (error) {
                    console.error("Error during the token exchange:", error);
                }
            }
        };

        handleLogin();
    }, [isAuthenticated, user, getAccessTokenSilently, navigate]);

    return <div>Loading...</div>;
};

export default CallbackComponent;