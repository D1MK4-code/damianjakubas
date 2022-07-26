import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './src/themes/theme';
import GlobalStyles from './src/styles/GlobalStyles';

export const wrapRootElement = ({ element, props }) => (
  <ThemeProvider theme={Theme} {...props}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
);
