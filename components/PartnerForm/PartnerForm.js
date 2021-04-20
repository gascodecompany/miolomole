import { useCallback, useState } from 'react';
import * as S from './PartnerForm.styles';
import Form from '../../Elements/Form';
import { PartnerFormInitialState, PartnerFormFieldsFunction, gridTemplate } from './PartnerForm.constants.js';
import { useRouter } from 'next/router';

export default function PartnerForm(props){
  const { partner } = props;
  const router = useRouter();
  const initialState = partner ? Object.entries(partner).reduce((obj, [param, value]) => ({ ...obj, [param]: { value } }), {}) : PartnerFormInitialState
  const [fields, setFields] = useState(initialState);
  const [message, setMessage] = useState();
  const PartnerFormfields = PartnerFormFieldsFunction({ fields, setFields, setMessage, router, partner });
  const formProps = { gridTemplate, fields: PartnerFormfields, setFields };

  return(
    <S.PartnerForm>
      <h1>Adicionar parceiro</h1>
      <Form {...formProps} />
      <S.ResponseMessage>{ message && message }</S.ResponseMessage>
    </S.PartnerForm>
  )
}