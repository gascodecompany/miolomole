import React from 'react';
import FieldInput from './FieldInput';
import Button from '../Button';
import FieldOuterLabel from './FieldOuterLabel';
import FieldRadioButtons from './FieldRadioButtons';
import FieldInputRadio from './FieldInputRadio';
import FieldSeparator from './FieldSeparator';
import FieldRange from './FieldRange';
import FieldPassword from './FieldPassword';
import FieldEditable from './FieldEditable';
import FieldSwitch from './FieldSwitch';

export default function Field(props) {
  switch (props.type) {
    case 'button': case 'submit': return <Button {...props} />
    case 'outerLabel': return <FieldOuterLabel {...props} />
    case 'radioButtons': return <FieldRadioButtons {...props} />
    case 'radio': return <FieldInputRadio {...props} />
    case 'separator': return <FieldSeparator {...props} />
    case 'range': return <FieldRange {...props} />
    case 'password': return <FieldPassword {...props} />
    case 'editable': return <FieldEditable {...props} />
    case 'switch': return <FieldSwitch {...props} />
    default: return <FieldInput {...props} />;
  }
}