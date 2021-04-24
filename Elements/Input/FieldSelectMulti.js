import React from 'react';
import { inputChange } from '../../helpers/fieldFunctions'
import { StyledFieldSelectMulti } from './Field.style';

export default function FieldArray({ fields, field, parentField, setFields, setInputInFocus, disabled, setDisabled }) {
  
  return (
    <StyledFieldSelectMulti
      isClearable
      isMulti
      value={field.options.filter(option => field.value && field?.value?.includes(option.value))}
      options={field.options}
      placeholder={field.placeholder}
      onChange={(value) => inputChange({ target: { value }, field, fields, parentField, setFields, setInputInFocus })}
    />
  );
}