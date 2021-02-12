import React from 'react';
import * as S from './Field.style';
import Input from '../Input';
import currencyAbbreviation from '../../helpers/currencyAbbreviation';

export default function Field({label, tip, error, errorMessage, ...props}) {
  const { name, prefix, suffix, value } = props;
  return (
    <S.Field name={name} hasValue={true}>
      { label && <S.Label>{`${label} de ${prefix ? prefix : ''}${currencyAbbreviation(value[0])}${suffix ? suffix : ''} até ${prefix ? prefix : ''}${currencyAbbreviation(value[1])}${suffix ? suffix : ''}`}</S.Label> }
      <Input {...props} />
    </S.Field>
  );
}
