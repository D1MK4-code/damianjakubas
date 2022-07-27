import React from 'react';
import { PortableText } from '@portabletext/react';
import Paragraph from './typo/Paragraph';

const portableTextComponents = {
  block: {
    normal: ({ children }) => <Paragraph>{children}</Paragraph>,
  },
};

function PortableTextComponent({ value }) {
  return <PortableText value={value} components={portableTextComponents} />;
}

export default PortableTextComponent;
