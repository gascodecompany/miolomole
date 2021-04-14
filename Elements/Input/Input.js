import React from 'react';
import InputText from './InputText';
import InputSelect from './InputSelect';
import InputSwitch from './InputSwitch';
import InputTextArea from './InputTextArea';
import InputRadio from './InputRadio';
import InputDate from './InputDate';
import InputRange from './InputRange';
import InputSearch from './InputSearch';

export default function Input(props) {
  const { type } = props

  const fieldTypes = {
    "select": <InputSelect {...props} />,
    "switch": <InputSwitch {...props} />,
    "radio":  <InputRadio {...props} />,
    "date":  <InputDate {...props} />,
    "textarea":  <InputTextArea {...props} />,
    "range":  <InputRange {...props} />,
    "search":  <InputSearch {...props} />,
  }
  return fieldTypes[type] || <InputText {...props} />
};
