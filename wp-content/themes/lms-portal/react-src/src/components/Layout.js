import React from 'react';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Homepage from '../pages/Homepage';
import Contact from '../pages/Contact';
import Theme from '../Theme';
import CallbackComponent from './CallbackComponent';

const Layout = () => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Router basename="/moucasa">
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/callback" element={<CallbackComponent />} />
            <Route path="/moucasa" component={<Homepage />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default Layout;
