export const ContactSectionFieldsState = ({
  name: { value: '' },
  email: { value: '' },
  message: { value: '' },
})

export const ContactSectionFunction = ({fields, setFields}) => ({
  
  name: {
    ...fields.name,
    name: 'name',
    label: 'Nome',
    placeholder: 'Nome',
    type: 'text',
  },
  email: {
    ...fields.email,
    name: 'email',
    label: 'Email',
    placeholder: 'seu e-mail',
    type: 'text',
  },
  message: {
    ...fields.messsage,
    name: 'messsage',
    label: 'Messagem',
    placeholder: 'Deixe uma mensagem',
    type: 'textarea',
  },

})

export const gridTemplate = (theme) => {
  const { screen: { screenXS }} = theme
  return `
    grid-template: ${`
      "name"
      "email"
      "message"
    `};

    @media screen {
      @media (min-width: ${screenXS}) {
        grid-template: ${`
          "name email"
          "message message"
        `};
        grid-template-columns: 180px 1fr 1fr;
        justify-content: start;
      }
    }
  `
};