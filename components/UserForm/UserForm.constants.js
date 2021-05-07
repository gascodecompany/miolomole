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
    type: 'image',
    className: 'avatar',
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
    grid-template-areas:
      "avatar"
      "userName"
      "occupation"
      "password"
      "description"
      "description";
    grid-template-rows: auto 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;

    @media screen{
      @media (min-width: 1024px){
        grid-template:
          "avatar userName occupation"
          "avatar password password"
          "avatar description description"
          "avatar . ."
        ;
        grid-template-columns: 320px 1fr 1fr;
        grid-template-rows: 80px 80px 80px auto;
      }
    }
  `
};