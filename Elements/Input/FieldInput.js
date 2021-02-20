import React from 'react';
import { StyledField, StyledLabel } from './Field.style';
import Input from 'Elements/Input';

export default function Field({label, tip, error, errorMessage, ...props}) {
  const { name } = props;

  return (
    <StyledField name={name}>
      { label && <StyledLabel>{label}</StyledLabel> }
      <Input {...props} />
    </StyledField>
  );
}
