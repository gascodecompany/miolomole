import React from 'react';
import * as S from './Field.style';
import Input from '../Input';

export default function Field({label, tip, styledLabel, styledItem, type, error, errorMessage, ...props}) {
  const { name, value } = props;
  return (
    <S.FieldEditable styles={styledItem && styledItem.type.componentStyle.rules} name={name}>
      { label && <S.NormalLabel styles={styledLabel?.type?.componentStyle?.rules}>{label}</S.NormalLabel> }
      <Input {...props} type="select" />
    </S.FieldEditable>
  );
}
