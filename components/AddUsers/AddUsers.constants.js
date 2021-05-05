export const UsuariosFieldsState = (props) => ({
  avatar: { value: '' },
  userName: { value: '' },
  occupation: { value: [] },
  description: { value: '' },
})

export const UsuariosFieldsFunction = ({ fields }) => ({
  avatar: {
    ...fields.avatar,
    name: 'avatar',
    label: 'Foto',
    type: 'image'
  },
  userName: {
    ...fields.userName,
    name: 'userName',
    label: 'Nome',
  },
  occupation: {
    ...fields.occupation,
    name: 'occupation',
    label: 'Ocupação',
    type: 'select',
    isMulti: true,
    options: [
      { label: 'Ilustrador', value: 'illustrator' },
      { label: 'Escritor', value: 'writer' },
      { label: 'Administrador', value: 'admin' }
    ]
  },
  description: {
    ...fields.description,
    label: 'Descrição',
    name: 'description',
    type: 'textarea',
    maxWidth: '200px'
  },
})

export const gridTemplate = () => {
  return `
    grid-template:
      "avatar userName occupation"
      "avatar description description"
    ;
    grid-template-columns: 320px 1fr 1fr;

  `
};