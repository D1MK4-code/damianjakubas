import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';
import Footer from './Footer';
import theme from '../themes/theme';
import { SearchModalContextProvider } from '../context/searchModalContext';
import Search from './search/SearchModal';

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <SearchModalContextProvider>
        <GlobalStyles />
        <Search />
        <Header />
        {children}
        <Footer />
      </SearchModalContextProvider>
    </ThemeProvider>
  );
}

export default Layout;
