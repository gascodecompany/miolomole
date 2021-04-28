import axios from 'axios';
import * as S from './BookInfo.style';
import Form from '../../Elements/Form';
import { useRouter } from 'next/router';
import Button from '../../Elements/Button';
import { useState, useEffect } from 'react';
import { useAppProvider } from '../../store/appProvider';
import mapFieldsToData from '../../utils/mapFieldsToData';
import mapDataToFields from '../../utils/mapDataToFields';
import { BookInfoFieldsFunction, BookInfoFieldsState, gridTemplate } from './BookInfo.constants';

export default function BookInfo({ book }){
  const router = useRouter();
  const { name } = router.query;
  const [message, setMessage] = useState();
  const { isLoggedIn } = useAppProvider();
  const [fields, setFields] = useState(BookInfoFieldsState);
  const bookFields = BookInfoFieldsFunction({fields, setFields, isLoggedIn});
  const formProps = { fields: bookFields, setFields, gridTemplate, isLoggedIn, striped: true }

  useEffect(() => {
    book && setFields((oldFields) => {
      const newFields = {...oldFields};
      mapDataToFields({newFields, constantFields: bookFields, data: book})
      return newFields
    })
  }, [book])

  const saveInfos = async () => {
    setMessage('')
    if(!name) {
      const variables = mapFieldsToData(bookFields)
      const res = await axios.post('/api/livros', { ...variables })
      if(res.status === 200){
        setMessage('Cadastro realizado com sucesso!')
      } else {
        alert(res?.data?.response)
      }
    }
  }

  return(
    <S.BookInfo>
      <Form {...formProps} />
      { isLoggedIn && <Button onClick={() => saveInfos()} label="Salvar Descrições" />}
      <S.Message>{ message && message }</S.Message>
    </S.BookInfo>
  )
}