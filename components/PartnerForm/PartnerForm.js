import { useState } from 'react';
import * as S from './PartnerForm.styles';
import Form from '../../Elements/Form';
import { PartnerFormFieldsState, PartnerFormFieldsFunction, gridTemplate } from './PartnerForm.constants.js';
import axios from 'axios';

export default function PartnerForm(props){
  const { partner } = props;
  const oldFields = {
    name: { value: partner?.name },
    logo: { value: partner?.logo },
    description: { value: partner?.description },
    city: { value: partner?.city },
    books: { value: partner?.books },
  }
  const [fields, setFields] = useState(!!partner ? oldFields : PartnerFormFieldsState);
  const [message, setMessage] = useState();

  const fieldsValue = Object.entries(fields).reduce((object, field) => {
    return Object.assign(object, { [field[0]]: field[1].value })
  }, {})

  const onSubmit = async () => {
    setMessage('')
    axios.post(`${process.env.API_URL}parceiros`, { ...fieldsValue })
      .then((res) => { 
        if(res.status === 200) { 
          setMessage('Parceiro criado com sucesso!');
          setFields((oldFields) => {
            const newFields = {...oldFields};
            newFields.name.value = '';
            newFields.logo.value = '';
            newFields.description.value = '';
            newFields.city.value = '';
            newFields.books.value = '';
            return newFields
          })
        }
      })
      .catch((err) => setMessage(err.response.data))
  }

  const PartnerFormfields = PartnerFormFieldsFunction({ fields, setFields, onSubmit, partner });

  console.log(PartnerFormfields)
  
  const formProps = {
    gridTemplate,
    fields: PartnerFormfields,
    setFields,
    onSubmit
  };
  
  return(
    <S.PartnerForm>
      <h1>Adicionar parceiro</h1>
      <Form {...formProps} />
      <S.ErrorMessage>{ message && message }</S.ErrorMessage>
    </S.PartnerForm>
  )
}