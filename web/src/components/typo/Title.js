import React from 'react';
import {
  SectionTitleStyles,
  TitleStyles,
  MainTitleStyles,
} from '../../styles/SectionTitleStyles';

export const SectionTitle = ({ children, tag, ...props }) => (
  <SectionTitleStyles as={tag} {...props}>
    {children}
  </SectionTitleStyles>
);

export const Title = ({ children, tag, ...props }) => (
  <TitleStyles as={tag} {...props}>
    {children}
  </TitleStyles>
);

export const MainTitle = ({ children, tag, ...props }) => (
  <MainTitleStyles as={tag} {...props}>
    {children}
  </MainTitleStyles>
);
