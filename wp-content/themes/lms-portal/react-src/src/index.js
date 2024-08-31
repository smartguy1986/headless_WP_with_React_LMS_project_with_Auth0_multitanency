import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router basename="/moucasa">
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </Router>
);
