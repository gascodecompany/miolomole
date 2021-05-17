import React from 'react';
import Input from '../Input';
import * as S from './Field.style';

export default function FieldFile({ label, ...props }) {
  return (
    <S.Field>
      { label && <S.NormalLabel>{label}</S.NormalLabel> }
      <Input {...props} />
    </S.Field>
  );
}
