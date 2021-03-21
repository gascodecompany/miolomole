export const loginModalFieldsState = () => ({
  userName: { value: '' },
  password: { value: '' }
})


export const loginModalFieldsFunction = ({fields}) => ({
  userName: {
    ...fields.userName,
    name: 'userName',
    label: 'Nome de usuário',
    placeHolder: 'Nome de usuário...',
  },
  password: {
    ...fields.password,
    name: 'password',
    label: 'Senha',
    placeHolder: 'Senha...',
    type: 'password'
  }
})

export const gridTemplate = (theme) => {
  return `
    grid-template: ${`
      "userName userName userName" 
      "password password password"
      ". loginButton ."
    `}
  `
}