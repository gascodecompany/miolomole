import { useState } from 'react';
import * as S from './AddUsers.styles';
import Form from '../../Elements/Form';
import { UsuariosFieldsState, UsuariosFieldsFunction, gridTemplate } from './AddUsers.constants.js';
import { useRouter } from 'next/router';

export default function AddUsers(props){
  const router = useRouter();
  const users = props.users ? JSON.parse(props.users) : [];
  const [fields, setFields] = useState(UsuariosFieldsState(users));
  const [message, setMessage] = useState();
  const PartnerFormfields = UsuariosFieldsFunction({ fields, setFields, setMessage, router, users });
  const formProps = { gridTemplate, fields: PartnerFormfields, setFields };

  return(
    <S.UsuariosWrapper>
      <h1>Adicionar usuário</h1>
      <Form {...formProps} />
      <S.ResponseMessage>{ message && message }</S.ResponseMessage>
    </S.UsuariosWrapper>
  )
}
