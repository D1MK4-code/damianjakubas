import React from 'react';
import { buttonTypes } from '../../static/buttonTypes';
import { ButtonStyles } from '../../styles/buttons/ButtonStyles';

function Button({ children, tag, variant = buttonTypes.primary, ...props }) {
  return (
    <ButtonStyles as={tag} {...props} variant={variant}>
      <span>{children}</span>
    </ButtonStyles>
  );
}

export default Button;
