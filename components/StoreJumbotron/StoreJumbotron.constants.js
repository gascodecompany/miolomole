import { css } from 'styled-components';
import axios from 'axios';

export const StoreJumbotronFieldsState = ({
  selectBook: { value: '' },
  selectState: { value: '' },
})

export const StoreJumbotronFieldsFunction = ({fields, setFields, books, states}) => ({
  selectState: {
    ...fields.selectState,
    name: 'selectState',
    placeholder: 'Estado...',
    type: 'select',
    isSearchable: true,
    // loadOptions: (query, callback) => {
    //   axios.get('/api/parceiros')
    //     .then(({data}) => callback(data.map((item) => ({...item.city, }))))
    //     .catch((err) => callback([]))
    // },
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
    "selectState"
    "submitButton"
  ;
  grid-gap: 32px;
  @media screen{
    @media (min-width: 1024px){
      grid-template-areas: 
        "selectState submitButton"
      ;
    }
  }
`