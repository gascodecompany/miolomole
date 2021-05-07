import axios from 'axios';
import * as S from './BookInfo.style';
import Form from '../../Elements/Form';
import { useRouter } from 'next/router';
import Button from '../../Elements/Button';
import { useState, useEffect } from 'react';
import { useAppProvider } from '../../store/appProvider';
import mapFieldsToData from '../../utils/mapFieldsToData';
import mapDataToFields from '../../utils/mapDataToFields';
import FieldEditable from '../../Elements/Field/FieldEditable';
import { BookInfoFieldsFunction, BookInfoFieldsState, priceFieldState, priceFieldFunction, gridTemplate } from './BookInfo.constants';
import toast, { Toaster } from 'react-hot-toast';

export default function BookInfo({ book }){
  const router = useRouter();
  const { name } = router.query;
  const { isLoggedIn } = useAppProvider();
  const [fields, setFields] = useState(BookInfoFieldsState);
  const [price, setPrice] = useState(priceFieldState);
  const priceField = priceFieldFunction({ price, isLoggedIn }).price
  const bookFields = BookInfoFieldsFunction({ fields, setFields });
  const formProps = { fields: bookFields, setFields, gridTemplate, isLoggedIn, striped: true }

  useEffect(() => {
    if(book) {
      setFields((oldFields) => {
        const newFields = {...oldFields};
        mapDataToFields({newFields, constantFields: bookFields, data: book})
        return newFields
      })
      setPrice((oldFields) => {
        const newFields = {...oldFields};
        newFields.price.value = book.price;
        return newFields;
      })
    }
  }, [book])
  
  const saveInfos = async () => {
    const variables = mapFieldsToData({ ...bookFields, priceField});
    if(!name) {
      const res = await axios.post('/api/livros', { ...variables });
      if(res.status === 200){
        toast.success('Cadastro realizado com sucesso!');
      } else {
        alert(res?.data?.response);
      }
    } else {
      const res = await axios.put('/api/livros', { ...variables, name })
      if(res.status === 200){ toast.success('Cadastro atualizado com sucesso!')} 
      else { alert(res?.data?.response) }
    }
  }

  const saveButton = {
    variation: "primary",
    onClick: () => isLoggedIn ? saveInfos() : router.push('parceiros'),
    label: isLoggedIn ? "Salvar Descrição" : "Comprar em loja parceira"
  }

  return(
    <S.BookInfo>
      <Form { ...formProps } />
      <S.BottomWrapper>
        <S.Price>
          <S.Label>Preço</S.Label>
          <S.PriceText><span>R$</span><FieldEditable {...priceField} isLoggedIn={isLoggedIn} setFields={setPrice} /></S.PriceText>
        </S.Price>
          <Button {...saveButton} />
      </S.BottomWrapper>
      <Toaster position="bottom-right" reverseOrder={false}/>      
    </S.BookInfo>
  )
}