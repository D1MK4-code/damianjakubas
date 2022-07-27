import React from 'react';
import { PageHeaderStyles } from '../styles/PageHeaderStyles';
import Paragraph from './typo/Paragraph';
import { SectionTitle } from './typo/Title';

function PageHeader({ title, description, className, children }) {
  return (
    <div className={className}>
      <PageHeaderStyles>
        <SectionTitle>{title}</SectionTitle>
        <Paragraph>{description}</Paragraph>
        {children}
      </PageHeaderStyles>
    </div>
  );
}

export default PageHeader;
