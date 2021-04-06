export const PartnerFormFieldsState = () => ({
  name: { value: '' },
  logo: { value: '' },
  description: { value: '' },
  city: { value: '' },
  books: { value: '' },
})
  
export const PartnerFormFieldsFunction = ({ fields, onSubmit, partner }) => ({
  name: {
    ...fields.name,
    name: 'name',
    label: 'Nome da empresa',
    onChange: ({ target, setFields }) => {
      const { value } = target;
      setFields((oldFields) => {
        const newFields = {...oldFields};
        newFields.name.value = value.replace(" ", "");
        return newFields;
      })
    },
  },
  logo: {
    ...fields.logo,
    name: 'logo',
    label: 'Logo da empresa',
  },
  description: {
    ...fields.description,
    name: 'description',
    label: 'Descrição',
  },
  city: {
    ...fields.city,
    name: 'city',
    label: 'Cidade',
    type: 'selectMulti',
    loadEmpty: true,
    isMulti: true,
    options: [
      { label: "Acre", value: "AC" },
      { label: "Alagoas", value: "AL" },
      { label: "Amazonas", value: "AM" },
      { label: "Amapá", value: "AP" },
      { label: "Bahia", value: "BA" },
      { label: "Ceará", value: "CE" },
      { label: "Distrito Federal", value: "DF" },
      { label: "Espírito Santo", value: "ES" },
      { label: "Goiás", value: "GO" },
      { label: "Maranhão", value: "MA" },
      { label: "Minas Gerais", value: "MG" },
      { label: "Mato Grosso do Sul", value: "MS" },
      { label: "Mato Grosso", value: "MT" },
      { label: "Pará", value: "PA" },
      { label: "Paraíba", value: "PB" },
      { label: "Pernambuco", value: "PE" },
      { label: "Piauí", value: "PI" },
      { label: "Paraná", value: "PR" },
      { label: "Rio de Janeiro", value: "RJ" },
      { label: "Rio Grande do Norte", value: "RN" },
      { label: "Rondônia", value: "RO" },
      { label: "Roraima", value: "RR" },
      { label: "Rio Grande do Sul", value: "RS" },
      { label: "Santa Catarina", value: "SC" },
      { label: "Sergipe", value: "SE" },
      { label: "São Paulo", value: "SP" },
      { label: "Tocantins", value: "TO" },
    ]
  },
  books: {
    ...fields.books,
    books: 'books',
    name: 'books',
    label: 'Livros',
  },
  submitButton: {
    type: 'button',
    label: partner ? 'Salvar' : 'Cadastrar',
    name: 'submitButton',
    variation: 'primary',
    onClick: () => onSubmit(),
  }
})

export const gridTemplate = (theme) => {
  return `
    grid-template: ${`
     "logo" 
     "name" 
     "description" 
     "city" 
     "books" 
     "submitButton" 
    `};
    grid-template-columns: 1fr;

    @media (min-width: 1024px) {
      grid-template: ${`
        "name name logo"
        "description description logo"
        "city books books"
        ". . submitButton"
    `};
      grid-template-columns: Repeat(3, 1fr);
    }
  `
};