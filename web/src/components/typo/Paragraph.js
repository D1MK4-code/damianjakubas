import React from 'react';
import { ParagraphStyles } from '../../styles/ParagraphStyles';

function Paragraph({ children, ...props }) {
  return <ParagraphStyles {...props}>{children}</ParagraphStyles>;
}

export default Paragraph;
