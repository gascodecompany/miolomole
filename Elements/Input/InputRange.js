import React from 'react';
import { inputChange, inputValidate } from '../../helpers/fieldFunctions';
import * as S from './Input.style';
import "rc-slider/assets/index.css";
// import currencyAbbreviation from '../../helpers/currencyAbbreviation'

export default function InputRange({ onChange, setFields, type, i, parentI, validate, onBlur, ...props }) {
  const { name, min, max, marks, toFixed, suffix } = props;
  
  const marksRange = {};
  for (let i = min; i.toFixed(toFixed) <= max; i += marks) {
    marksRange[i] = `${currencyAbbreviation(i.toFixed(toFixed))}${suffix || ''}`
  }

  return (
    <S.InputRange
      {...props}
      marks={marksRange}
      onChange={(value) => inputChange({ target: { name: props.name, value }, setFields, onChange })}
    />
  );
}