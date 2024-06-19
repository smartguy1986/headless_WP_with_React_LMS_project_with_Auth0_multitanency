import React, { useEffect, useState } from 'react';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Homepage from '../pages/Homepage';
import Contact from '../pages/Contact';
import Theme from '../Theme';
import CallbackComponent from './CallbackComponent';
import SignIn from '../pages/onboard/SignIn';
import SignUp from '../pages/onboard/SignUp';
import ForgotPassword from '../pages/onboard/ForgotPassword'; // Import ForgotPassword component

const Layout = () => {
  const [userLoggedin, setUserLoggedin] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("userLogStatus") === "true";
    setUserLoggedin(loggedInStatus);
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Router basename="/moucasa">
        {userLoggedin && <Header />}
        {userLoggedin ? (
          <Container>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/home" element={<Homepage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/callback" element={<CallbackComponent />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Define route for Forgot Password */}
            </Routes>
          </Container>
        ) : (
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Define route for Forgot Password */}
            <Route path="*" element={<SignUp />} /> {/* Default to SignUp if not logged in */}
          </Routes>
        )}

        {userLoggedin && <Footer />}
      </Router>
    </ThemeProvider>
  );
};

export default Layout;
