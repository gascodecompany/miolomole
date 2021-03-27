
export const inputChange = ({ target, setFields }) => {
  const { name, value } = target;
  setFields((oldFields) => {
    oldFields[name].value = value;
    return ({ ...oldFields });
  });
};

export const formDisabled = (fields) => {
  Object.values(fields).some((field) => {
    if(field.validate) {
      const validation = field.type === 'select' ? field.validate(field.value?.value) : field.validate(field.value)
      return (validation.empty || (field.value && validation.invalid))
    }
  })
}

export function inputValidate({ target, setFields, validate, onBlur }) {
  if (onBlur) { return (onBlur({target, setFields, validate})) }
  if (validate) {
    const { name, value } = target;
    const validation = validate(value);
    if(validation.empty) {
      setFields((oldFields) => {
        oldFields[name].error = true;
        oldFields[name].errorMessage = validation.emptyMessage || 'Este campo é obrigatório';
        return ({ ...oldFields });
      });
    } else if(value && validation.invalid) {
      setFields((oldFields) => {
        oldFields[name].error = true;
        oldFields[name].errorMessage = validation.invalidMessage || 'Valor do campo inválido';
        return ({ ...oldFields });
      });
    }
  }
};

export const switchMultiOnChange = ({ target, setFields }) => {
  const { name, checked, option } = target;
  const { _id } = option
  setFields((oldFields) => {
    oldFields[name].value = checked
      ? [ ...oldFields[name].value, _id ]
      : oldFields[name].value.filter((option) => option !== _id);
    return ({ ...oldFields });
  });
};
