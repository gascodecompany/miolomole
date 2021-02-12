import React from 'react';
import { inputChange } from '../../helpers/fieldFunctions';
import * as S from './Input.style';

export default function InputRadio({ onChange, options, setFields, ...props }) {
  return (
    <S.InputRadioContainer>
      {options.map((option) => (
        <S.InputRadioLabel
          {...props}
          onChange={({ target }) => (onChange
            ? onChange({ target, setFields })
            : inputChange({ target, setFields })
          )}
          key={option.value}
          htmlFor={option.name}
          maskChar=""
        >
          {option.label}
          <S.InputRadio name={option.name} type="radio"/>
        </S.InputRadioLabel>
      ))}
    </S.InputRadioContainer>
  );
}
