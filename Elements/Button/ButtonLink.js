import React from 'react';
import { StyledButtonLink } from './Button.style';

export default function ButtonLink(props) {
  const { children, variation, icon, iconRight, label, link='/', ...restProps } = props;

  return (
    <StyledButtonLink className={variation} {...restProps} to={link}>
      {children
        ? children
        : <>
          {props.icon && <props.icon/>}
          {label && label}
          {props.iconRight && <props.iconRight/>}
        </>
      }
    </StyledButtonLink>
  );
}
