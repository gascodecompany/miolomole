import React from 'react';
import * as S from './Field.style';
import Input from '../Input';

export default function FieldOuterLabel({label, tip, error, errorMessage, ...props}) {
  const { name } = props;

  return (
    <S.FieldOuterLabel name={name}>{label}</S.FieldOuterLabel>
  );
}
