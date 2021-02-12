import React, { useState } from 'react';
import Parser from 'html-react-parser';
import { addItemToArray, removeItemFromArray } from '../../helpers/fieldFunctions'
import FieldText from './FieldText';
import FieldSelect from './FieldSelect';
import FieldObject from './FieldObject';
import Button from '../Button';

export default function FieldArray({ fields, field, setFields, grandParentField,disabled, setDisabled}) {
  const { name, value, edit, tip, type } = field;
  const [inputInFocus, setInputInFocus] = useState(false);
  const labelOut = !edit || inputInFocus || (!!value && !!value.length);
  const fieldObj = { fields, setFields, setInputInFocus, disabled, setDisabled };

  const renderField = (arrayField, index) => {
    switch (type) {
      case "selectArray":
        return <FieldSelect  {...fieldObj} field={{ ...arrayField, index }} parentField={field} />
      case "objectArray":
        return <FieldObject  {...fieldObj} field={{ ...arrayField, index }} parentField={field} grandParentField={grandParentField} />
      default:
        return <FieldText  {...fieldObj} field={{ ...arrayField, index }} parentField={field} />
    }
  };
  
  return (
    <>
      <Button className="plusButton" label="+" onClick={() => addItemToArray({ fields, field, setFields })} />
      {value && value.map((arrayField, index) => (
        <div 
          key={`${name}Field${index}`} 
          className={`${type}Field ${name}Field ${labelOut ? ' inputInFocus' : ''}${edit ? '' : ' disabled'}`}
        >
          {arrayField.label &&
            <label className={`${value ? 'checked' : ''}`} htmlFor={name}>
              {arrayField.label && Parser(arrayField.label)}
            </label>
          }
          {renderField(arrayField, index)}
          {value.length > 1 &&
            <Button
              className="minusButton"
              label="-"
              onClick={() => removeItemFromArray({ fields, field, index, setFields })}
            />
          }
          {edit && arrayField.tip && <p className={`tip ${name}Tip`}>{Parser(tip)}</p>}
          {!!arrayField.errormessage && <p className='message'>{arrayField.errormessage}</p>}
        </div>
      ))}
    </>
  );
}

