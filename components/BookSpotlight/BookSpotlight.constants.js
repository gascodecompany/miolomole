export const bookSpotlightFieldsState = () => ({
  spotlight: { value: '' },
})
  
export const bookSpotlightFieldsFunction = ({ fields }) => ({
  spotlight: {
    ...fields.spotlight,
    name: 'spotlight',
  },
})