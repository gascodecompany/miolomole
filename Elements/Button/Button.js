import React, { forwardRef } from 'react';
import ButtonExternalLink from './ButtonExternalLink';
import ButtonAction from './ButtonAction';

export const Button = forwardRef((props, ref) => {
  const { type } = props;

  const buttons = {
    externalLink: <ButtonExternalLink {...props} ref={ref} />,
  };

  return buttons[type] || <ButtonAction {...props} ref={ref} />;
});

export default Button;