export const bookSinopsisFieldsState = () => ({
  sinopsys: { value: '' },
})
  
export const bookSinopsisFieldsFunction = ({ fields, isLoggedIn }) => ({
  sinopsys: {
    ...fields.sinopsys,
    name: 'sinopsys',
    type: 'textarea',
    readOnly: !isLoggedIn,
  },
})