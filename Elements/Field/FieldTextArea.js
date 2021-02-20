// import React from 'react';
// import { inputBlur, inputChange } from '../../helpers/fieldFunctions'
// import { StyledTextArea } from './Field.style';

// export default function FieldTextArea({ fields, field, setFields, setInputInFocus, disabled, setDisabled }) {
//   const { name, label, placeholder, type, value } = field;

//   return (
//     <StyledTextArea
//       name={name}
//       id={name}
//       label={label}
//       placeholder={placeholder}
//       value={value || ''}
//       onFocus={() => type !== 'checkbox' && setInputInFocus(true)}
//       //onBlur={() => inputBlur({field, fields, setFields, setInputInFocus, disabled, setDisabled})}
//       onChange={({target}) => inputChange({ target, field, fields, setFields, setInputInFocus })}
//     />
//   );
// }
