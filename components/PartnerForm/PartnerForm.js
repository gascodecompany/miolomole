import axios from 'axios';
import { useState } from 'react';
import Form from '../../Elements/Form';
import Button from '../../Elements/Button';
import { useRouter } from 'next/router';
import * as S from './PartnerForm.styles';
import { PartnerFormInitialState, PartnerFormFieldsFunction, gridTemplate } from './PartnerForm.constants.js';
import mapFieldsToData from '../../utils/mapFieldsToData';

export default function PartnerForm(props){
  const { partner, books } = props;
  const router = useRouter();
  const booksArray = books ? JSON.parse(books) : {};
  const initialState = partner 
    ? Object.entries(partner).reduce((obj, [param, value]) => {
      if(Array.isArray(value)){
        const values = value.reduce((arr, item) => ([ ...arr, { label: item?.label || item?.title, "value": item?._id || item?.value }]), [])
        return { ...obj, [param]: { value: values } }
      }
      return { ...obj, [param]: { value } }
    }, {})
    : PartnerFormInitialState
  const [fields, setFields] = useState(initialState);
  const [message, setMessage] = useState();
  const PartnerFormfields = PartnerFormFieldsFunction({ fields, setFields, setMessage, router, partner, books: booksArray });
  const onSubmit = async () => {
    setMessage('')
    const fieldsValue = mapFieldsToData(PartnerFormfields);
    if(!partner){ 
      const res = await axios.post(`/api/parceiros`, { ...fieldsValue })
      if(res.status === 200) { setMessage('Cadastrado realizado com sucesso!'); setFields(PartnerFormInitialState) }
      else { setMessage(res.response.data) }
    } else { 
      const res = await axios.put(`/api/parceiros`, { ...fieldsValue, _id: partner._id })
      if(res.status === 200) { setMessage('Cadastro atualizado com sucesso!'); router.back() } 
      else { setMessage(res?.response?.data) }
    }
  }
  const formProps = { gridTemplate, fields: PartnerFormfields, setFields };
  return(
    <S.PartnerForm>
      <h1>{!!partner ? 'Editar' : 'Adicionar'} parceiro</h1>
      <Form {...formProps} />
      <S.ResponseMessage>{ message && message }</S.ResponseMessage>
      <Button label={partner ? 'Salvar' : 'Cadastrar'} variation='primary' onClick={() => onSubmit()} />
    </S.PartnerForm>
  )
}