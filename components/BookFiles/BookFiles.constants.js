export const bookFilesFieldsState = () => ({
  visual: { value: '' },
  description: { value: '' },
})
  
export const bookFilesFieldsFunction = ({ fields }) => ({
  visual: {
    ...fields.visual,
    name: 'visual',
    label: 'Audio Visual',
    type: 'audio',
  },
  description: {
    ...fields.description,
    name: 'description',
    label: 'Audio Descritivo',
    type: 'audio',
  },
})

export const gridTemplate = () => `
  grid-template-areas: ${`
    "visual"
    "descritivo"
  ;
  `}
`