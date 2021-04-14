
export const inputChange = ({ target, setFields }) => {
  const { name, value } = target;
  setFields((oldFields) => {
    oldFields[name].value = value;
    return ({ ...oldFields });
  });
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
