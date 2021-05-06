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
      "image"
      "isActive"
      "title"
      "description"
    `};
    grid-gap: 15px;
    grid-template-rows: auto;
    grid-template-columns: 100%;
    margin-bottom: 30px;

    @media (min-width: 1024px){
      grid-template: ${`
        "image image"
        "title isActive"
        "description description"
      `};
      grid-template-columns: 1fr 250px;
    }
  `
}