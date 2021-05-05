import axios from 'axios';
import { useState } from 'react';
import * as S from './AddUsers.styles';
import Form from '../../Elements/Form';
import { useRouter } from 'next/router';
import Button from '../../Elements/Button'
import mapFieldsToData from '../../utils/mapFieldsToData';
import { UsuariosFieldsState, UsuariosFieldsFunction, gridTemplate } from './AddUsers.constants.js';

export default function AddUsers(props){
  const router = useRouter();
  const users = props.users ? JSON.parse(props.users) : [];
  const [fields, setFields] = useState(UsuariosFieldsState(users));
  const [message, setMessage] = useState();
  const partnerFormfields = UsuariosFieldsFunction({ fields });
  const formProps = { gridTemplate, fields: partnerFormfields, setFields };

  const onSubmit = async () => {
    const variables = mapFieldsToData(partnerFormfields);
    const res = await axios.post('/api/users', { ...variables });
    if(res.status === 200) { setMessage('Usuário cadastrado com sucesso!') }
    else { setMessage(res?.response?.data) }
  }

  return(
    <S.UsuariosWrapper>
      <h1>Adicionar usuário</h1>
      <Form {...formProps} />
      <Button variation="primary" label="Cadastrar Usuário" onClick={() => onSubmit()}/>
      <S.ResponseMessage>{ message && message }</S.ResponseMessage>
    </S.UsuariosWrapper>
  )
}
