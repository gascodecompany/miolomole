export const blogPostFieldsState = () => ({
  image: { value: '' },
  title: { value: '' },
  nodes: { value: '' },
})
  
export const blogPostFieldsFunction = ({ fields }) => ({
  image: {
    ...fields.image,
    name: 'image',
    type: 'image',
  },
  title: {
    ...fields.title,
    name: 'title',
    label: 'Titulo: ',
  },
  nodes: {
    ...fields.nodes,
    name: 'nodes',
  },
})