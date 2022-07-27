import React from 'react';

function ActionButton({ children, ...rest }) {
  return (
    <button role="button" tabIndex={0} {...rest}>
      {children}
    </button>
  );
}

export default ActionButton;
