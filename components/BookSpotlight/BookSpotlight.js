import axios from 'axios';
import Form from '../../Elements/Form';
import Button from '../../Elements/Button';
import { useState, useEffect } from 'react';
import * as S from './BookSpotlight.styles';
import { useAppProvider } from '../../store/appProvider';
import mapFieldsToData from '../../utils/mapFieldsToData';
import mapDataToFields from '../../utils/mapDataToFields';
import { bookSpotlightFieldsState, bookSpotlightFieldsFunction, gridTemplate } from './BookSpotlight.constants';
import toast, { Toaster } from 'react-hot-toast';

export default function BookSpotlight({ book }){
  const { isLoggedIn } = useAppProvider();
  const [fields, setFields] = useState(bookSpotlightFieldsState);
  const bookSpotlightFields = bookSpotlightFieldsFunction({ fields });
  
  useEffect(() => {
    setFields((oldFields) => {
      const newFields = {...oldFields};
      mapDataToFields({ newFields, constantFields: bookSpotlightFields, data: book.spotlight });
      return newFields;
    })
  }, [])

  const formProps = {
    fields: bookSpotlightFields,
    setFields,
    gridTemplate
  };

  const saveInfos = async() => {
    const variables = mapFieldsToData({...bookSpotlightFields});
    variables._id = book._id;
    const res = await axios.put('/api/livros', { _id: book._id, spotlight: { ...variables } });
    if(res.status === 200){ toast.success('Destaques salvos com sucesso!') }
  }

  return (
    <S.BookSpotlight>
      <h1>Destaque</h1>
      <Form { ...formProps } />
      <Toaster position="bottom-right" reverseOrder={false}/>      
      { isLoggedIn && <Button variation="primary" onClick={() => saveInfos()} label="Salvar Destaque" /> }
    </S.BookSpotlight>
  )
}