import React from 'react';
import * as S from './Field.style';
import Input from '../Input';

export default function FieldNormalText({label, tip, error, errorMessage, ...props}) {
  const { name, value } = props;
  return (
    <S.NormalField name={name}>
      { label && <S.Label>{label}</S.Label> }
      <Input {...props} />
    </S.NormalField>
  );
}
