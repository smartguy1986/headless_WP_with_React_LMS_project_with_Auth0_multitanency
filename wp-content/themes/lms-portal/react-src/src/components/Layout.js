import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import Homepage from '../pages/Homepage';
import Contact from '../pages/Contact';
import Theme from '../Theme';
import Callback from '../pages/onboard/Callback';
import SignIn from '../pages/onboard/SignIn';
import SignUp from '../pages/onboard/SignUp';
import ForgotPassword from '../pages/onboard/ForgotPassword';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loading from './Loading';

const Layout = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const [isauth, setisauth] = useState();

  useEffect(() => {
    if(isAuthenticated){
      setisauth(isAuthenticated);
    }
    else{
      setisauth(localStorage.getItem('user'));
    }
  }, [isAuthenticated]);

  console.log("isAuth ==== " + isAuthenticated)

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      {isAuthenticated && <Header />}
      <Container>
        <Routes>
          <Route path="/" element={isauth ? <Homepage /> : <SignUp />} />
          <Route path="/home" element={isauth ? <Homepage /> : <Navigate to="/signup" />} />
          <Route path="/contact" element={isAuthenticated ? <Contact /> : <Navigate to="/signup" />} />
          <Route path="/callback" element={<Callback />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={isAuthenticated ? <Homepage /> : <Navigate to="/signup" />} />
        </Routes>
      </Container>
      {isAuthenticated && <Footer />}
    </ThemeProvider>
  );
};

export default Layout;
