import React, { useState } from 'react';
import * as S from './Field.style';
import Input from '../Input';
import PasswordEye from '../../images/icons/PasswordEye'

export default function FieldPassword({label, tip, error, errorMessage, ...props}) {
  const { name, value, type } = props;
  const typeInput = type ? type : 'text';
  const [isVisible, setIsVisible] = useState(false)
  const [typeState, setTypeState] = useState(typeInput)

  const handleIsVisibleFunction = () => {
    if(typeState == 'password'){
      setTypeState('text')
      setIsVisible(true)
    } else {
      setTypeState('password')
      setIsVisible(false)
    }
  }

  return (
    <S.FieldPassword name={name} hasValue={ typeState === 'select' || typeState === 'textarea' || !!value }>
      { label && <S.Label>{label}</S.Label> }
      <Input type={typeState} {...props} />
      <S.PasswordToggle onClick={() => handleIsVisibleFunction()}>
        <PasswordEye isVisible={isVisible}/>
      </S.PasswordToggle>
    </S.FieldPassword>
  );
}
