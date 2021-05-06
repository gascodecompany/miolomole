export const usuariosFieldsState = (props) => ({
  avatar: { value: '' },
  userName: { value: '' },
  occupation: { value: [] },
  description: { value: '' },
  password: { value: '' },
})

export const usuariosFieldsFunction = ({ fields }) => ({
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
  password: {
    ...fields.password,
    name: 'password',
    label: 'Senha',
    type: 'password'
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
      "avatar password password"
      "avatar description description"
    ;
    grid-template-columns: 320px 1fr 1fr;

  `
};