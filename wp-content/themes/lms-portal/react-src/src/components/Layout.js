import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from 'react';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Homepage from '../pages/Homepage';
import Contact from '../pages/Contact';
import Theme from '../Theme';
import Callback from '../pages/onboard/Callback';
import SignIn from '../pages/onboard/SignIn';
import SignUp from '../pages/onboard/SignUp';
import ForgotPassword from '../pages/onboard/ForgotPassword';
import CallbackComponent from "./CallbackComponent";

const Layout = () => {
  const { isAuthenticated } = useAuth0();
  const [userLoggedin, setUserLoggedin] = useState(false);

  useEffect(() => {
    setUserLoggedin(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Router basename="/moucasa">
        {isAuthenticated && <Header />}
        <Container>
          <Routes>
            <Route path="/" element={isAuthenticated ? <Homepage /> : <SignUp />} />
            <Route path="/home" element={isAuthenticated ? <Homepage /> : <SignUp />} />
            <Route path="/contact" element={isAuthenticated ? <Contact /> : <SignUp />} />
            <Route path="/callback" element={<Callback />} />
            {/* <Route path="/callback" element={<CallbackComponent />} /> */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={isAuthenticated ? <Homepage /> : <SignUp />} />
          </Routes>
        </Container>
        {userLoggedin && <Footer />}
      </Router>
    </ThemeProvider>
  );
};

export default Layout;