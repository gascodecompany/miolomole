import React from 'react';
import * as S from './Field.style';
import Input from '../Input';

export default function Field({label, tip, error, errorMessage, ...props}) {
  const { name, value } = props;
  return (
    <S.Field name={name} hasValue={ props.type === 'select' || props.type === 'textarea' || !!value }>
      { label && <S.Label>{label}</S.Label> }
      <Input {...props} />
    </S.Field>
  );
}
