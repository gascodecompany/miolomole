import { css } from 'styled-components'

export const StoreJumbotronFieldsState = ({
  selectBook: { value: '' },
  selectState: { value: '' },
})

export const StoreJumbotronFieldsFunction = ({fields, setFields}) => ({

  selectBook: {
    ...fields.selectBook,
    name: 'selectBook',
    label: '',
    placeholder: 'Selecione o livro',
    type: 'select',
    options: ''
  },
  selectState: {
    ...fields.selectState,
    name: 'selectState',
    label: '',
    placeholder: 'Selecione o Estado',
    type: 'select',
    options: ''
  },
  submitButton: {
    name: 'submitButton',
    label: 'Buscar',
    type: 'button',
    variation: 'primary'
  }
})


export const gridTemplate = () => css`
  width: 80%;
  grid-template-areas: 
    "selectBook"
    "selectState"
    "submitButton"
  ;
  grid-gap: 32px;
  @media screen{
    @media (min-width: 1024px){
      grid-template-areas: 
        "selectBook selectState submitButton"
      ;
    }
  }
`