import React from 'react';
import { StyledSpinner } from './Spinner.style';

export default function Spinner({ color }) {
  return (
    <StyledSpinner viewBox="0 0 40 40" color={color}>
      <circle cx="20" cy="20" r="15" fill="none" strokeWidth="6"/>
    </StyledSpinner>
  )
};