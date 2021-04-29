import React from 'react';
import * as S from './Field.style';
import Input from '../Input';
import { inputChange } from '../../helpers/fieldFunctions';

export default function Field({label, styledLabel, styldItem, tip, error, errorMessage, ...props}) {
  const { name, styledComponent, value, setFields, isLoggedIn } = props;
  const onChange = ({ target }) => inputChange({ target, setFields });
  const inputProps = { name, value, onChange, styles: styledComponent.type.componentStyle.rules };
  
  return (
    <S.FieldEditable styles={styldItem && styldItem.type.componentStyle.rules}>
      {label && <S.NormalLabel styles={styledLabel.type.componentStyle.rules} >{label}</S.NormalLabel>}
      <S.LabelEditable {...styledComponent.props} {...inputProps} readOnly={!isLoggedIn} />
      {/* <InputEditable {...children.props} {...inputProps} readOnly={!isLoggedIn} /> */}
    </S.FieldEditable>
  )
}
