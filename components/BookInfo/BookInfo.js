import axios from 'axios';
import * as S from './BookInfo.style';
import Form from '../../Elements/Form';
import { useRouter } from 'next/router';
import Button from '../../Elements/Button';
import { useState, useEffect } from 'react';
import { useAppProvider } from '../../store/appProvider';
import mapFieldsToData from '../../utils/mapFieldsToData';
import mapDataToFields from '../../utils/mapDataToFields';
import { BookInfoFieldsFunction, BookInfoFieldsState, priceFieldState, priceFieldFunction, gridTemplate } from './BookInfo.constants';
import FieldEditable from '../../Elements/Field/FieldEditable';



export default function BookInfo({ book }){
  const router = useRouter();
  const { name } = router.query;
  const [message, setMessage] = useState();
  const { isLoggedIn } = useAppProvider();
  const [fields, setFields] = useState(BookInfoFieldsState);
  const [price, setPrice] = useState(priceFieldState);
  const priceField = priceFieldFunction({ price, isLoggedIn }).price
  const bookFields = BookInfoFieldsFunction({fields, setFields});
  const formProps = { fields: bookFields, setFields, gridTemplate, isLoggedIn, striped: true }

  useEffect(() => {
    book && setFields((oldFields) => {
      const newFields = {...oldFields};
      mapDataToFields({newFields, constantFields: bookFields, data: book})
      return newFields
    })
  }, [book])
  
  const saveInfos = async () => {
    setMessage('');
    const variables = mapFieldsToData({ ...bookFields, ...priceField});
    if(!name) {
      const res = await axios.post('/api/livros', { ...variables });
      if(res.status === 200){
        setMessage('Cadastro realizado com sucesso!');
      } else {
        alert(res?.data?.response);
      }
    } else {
      const res = await axios.put('/api/livros', { ...variables, name })
      if(res.status === 200){ setMessage('Cadastro atualizado com sucesso!')} 
      else { alert(res?.data?.response) }
    }
  }

  return(
    <S.BookInfo>
      <Form { ...formProps } />
      <S.BottomWrapper>
        <S.Price>
          <S.Label>Preço</S.Label>
          <S.PriceText><span>R$</span><FieldEditable {...priceField} isLoggedIn={isLoggedIn} setFields={setPrice} /></S.PriceText>
        </S.Price>
        { isLoggedIn 
          ? <Button onClick={() => saveInfos()} label="Salvar Sinopse" />
          : <Button onClick={() => router.push('parceiros')} label="Comprar em loja parceira" />
        }
      </S.BottomWrapper>
      <S.Message>{ message && message }</S.Message>
    </S.BookInfo>
  )
}