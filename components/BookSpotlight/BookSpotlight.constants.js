export const bookSpotlightFieldsState = () => ({
  isActive: { value: false },
  title: { value: '' },
  description: { value: '' },
  image: { value: '' },
})
  
export const bookSpotlightFieldsFunction = ({ fields }) => ({
  isActive: {
    ...fields.isActive,
    name: 'isActive',
    label: 'Destacar Livro na home?',
    type: 'switch',
  },
  title: {
    ...fields.title,
    name: 'title',
    label: 'Título',
  },
  description: {
    ...fields.description,
    name: 'description',
    label: 'Descrição',
  },
  image: {
    ...fields.image,
    name: 'image',
    type: 'image',
  },
})

export const gridTemplate = () => {
  return `
    grid-template: ${`
      "isActive"
      "title"
      "description"
      "image"
    `};
    grid-gap: 15px;
    grid-template-rows: 20px 20px 20px;
    @media (min-width: 1024px){
      grid-template: ${`
        "isActive image"
        "title ."
        "description ."
      `};
    }
  `
}