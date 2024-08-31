import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { auth0ConfigforLogin } from '../auth0-config';

const Auth0ProviderWithHistory = ({ children }) => {
    const domain = auth0ConfigforLogin.domain;
    const clientId = auth0ConfigforLogin.clientId;

    // const navigate = useNavigate();

    // const onRedirectCallback = (appState) => {
    //     navigate(appState?.returnTo || window.location.origin + '/moucasa/home');
    // };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={auth0ConfigforLogin.redirectUri}
            // onRedirectCallback={onRedirectCallback}
            cacheLocation="localstorage" // This will store tokens in localStorage
            useRefreshTokens={true} // Optional: Use refresh tokens to keep the session alive
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithHistory;
