export const blogJumbotronFieldsState = () => ({
  jumbotron: { value: '' },
  title: { value: '' },
})
  
export const blogJumbotronFieldsFunction = ({ fields }) => ({
  jumbotron: {
    ...fields.jumbotron,
    name: 'jumbotron',
    type: 'image',
  },
  title: {
    ...fields.title,
    name: 'title',
  },
})