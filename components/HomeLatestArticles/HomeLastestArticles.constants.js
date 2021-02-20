export const HomeLatestArticlesFieldsState = ({
  email: { value: 'seu e-mail' },
})

export const HomeLatestArticlesFunction = ({fields, setFields}) => ({
  
  email: {
    ...fields.email,
    name: 'email',
    label: 'Email',
    placeholder: 'seu e-mail',
    type: 'text',
  },

})