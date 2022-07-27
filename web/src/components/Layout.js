import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';
import Footer from './Footer';
import theme from '../themes/theme';

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        {children}
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default Layout;
