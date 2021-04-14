import React from 'react';
import { StyledButtonNavLink } from './Button.style';

export default function ButtonNavLinkDropDown({ label, link, ...props }) {

  return (
    <StyledButtonNavLink to={link} activeClassName="active" exact >
      {props.icon && <props.icon/>}
      {label}
      {props.iconRight && <props.iconRight/>}
    </StyledButtonNavLink>
  );
};
