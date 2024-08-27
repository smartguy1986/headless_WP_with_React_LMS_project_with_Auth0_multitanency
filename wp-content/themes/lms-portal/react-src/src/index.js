import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import { auth0Config } from './auth0-config';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Auth0Provider
    domain={auth0Config.domain}
    clientId={auth0Config.clientId}
    redirectUri={auth0Config.redirectUri}
    cacheLocation="localstorage"
    debug={true}
  >
  
    <App />
  </Auth0Provider>
);
