
// export default function FieldArray({ fields, field, parentField, setFields, setInputInFocus, disabled, setDisabled }) {
//   const { name, value, options } = field;
//   const selectStyles = {
//     option: (provided, {isSelected, isFocused}) => ({
//       ...provided,
//       backgroundColor: isSelected ? '#f05c22' : isFocused ? "#ffe7c2" : '#fafafa',
//     }),
//     menu: base => ({
//       ...base,
//       width: "102%",
//       left: "-3px",
//       border: "none",
//       borderRadius: 0,
//       margin: 0,
//       padding: 0,
//       backgroundColor: "transparent",
//     }),
//   }
  
//   return (
//       <StyledFieldSelectCreateMulti
//         styles={selectStyles}
//         name={name}
//         id={name}
//         value={options.filter(option => option.value === value)}
//         options={options}
//         onFocus={() => setInputInFocus(true)}
//         onBlur={() => inputBlur({field, fields, setFields, setInputInFocus,disabled, setDisabled})}
//         onChange={({value}) => inputChange({ target: { value }, field, fields, parentField, setFields, setInputInFocus })}
//       />
//   );
// }

import React from 'react';
import { inputChange } from '../../helpers/fieldFunctions'
import { StyledFieldSelectCreateMulti } from './Field.style';

export default function FieldArray({ fields, field, parentField, setFields, setInputInFocus, disabled, setDisabled }) {
  return (
    <StyledFieldSelectCreateMulti
        isClearable
        isMulti
        value={field.value ? field.value.map(option => ({label: option, value: option})) : []}
        options={field.options}
        placeholder={field.placeholder}
        onChange={(value) => inputChange({ target: { value }, field, fields, parentField, setFields, setInputInFocus })}
      />
  );
}