export const bookSinopsisFieldsState = () => ({
  synopsis: { value: '' },
})
  
export const bookSinopsisFieldsFunction = ({ fields, isLoggedIn }) => ({
  synopsis: {
    ...fields.synopsis,
    name: 'synopsis',
    type: 'textarea',
    readOnly: !isLoggedIn,
  },
})