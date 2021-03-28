import React from 'react';
import * as S from './Field.style';
import Input from '../Input';
import PasswordEye from '../../images/icons/PasswordEye'
import { useState } from 'react/cjs/react.development';

export default function FieldPassword({label, tip, type, error, errorMessage, ...props}) {
  const { name, value } = props;
  const [isVisible, setIsVisible] = useState(false)
  const [typeState, setTypeState] = useState(type)

  const setIsVisibleFunction = () => {
    if(typeState == 'password'){
      setTypeState('text')
      setIsVisible(true)
    } else {
      setTypeState('password')
      setIsVisible(false)
    }
  }

  return (
    <S.FieldPassword name={name} hasValue={ props.type === 'select' || props.type === 'textarea' || !!value }>
      { label && <S.Label>{label}</S.Label> }
      <Input type={typeState} {...props} />
      <S.PasswordToggle onClick={() => setIsVisibleFunction()}>
        <PasswordEye isVisible={isVisible}/>
      </S.PasswordToggle>
    </S.FieldPassword>
  );
}
