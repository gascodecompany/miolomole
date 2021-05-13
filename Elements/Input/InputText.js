import React from 'react';
import { inputChange } from '../../helpers/fieldFunctions';
import * as S from './Input.style';

export default function InputText({ placeholder, onChange, setFields, isLoggedIn, ...props }) {
  return (
    <S.InputText
      {...props}
      onChange={({ target }) => (onChange
        ? onChange({ target, setFields })
        : inputChange({ target, setFields })
      )}
      maskChar=""
      placeholder={placeholder}

    />
  );
}
