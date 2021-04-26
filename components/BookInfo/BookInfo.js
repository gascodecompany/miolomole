import { useState, useEffect } from 'react';
import Form from '../../Elements/Form';
import * as S from './BookInfo.style';
import { useAppProvider } from '../../store/appProvider';
import { BookInfoFieldsFunction, BookInfoFieldsState, gridTemplate } from './BookInfo.constants';
import Button from '../../Elements/Button';
import mapFieldsToData from '../../utils/mapFieldsToData';
import mapDataToFields from '../../utils/mapDataToFields';


export default function BookInfo({ book }){
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

  const saveInfos = () => {
    const variables = mapFieldsToData(bookFields)
    // chamar api
  }

  return(
    <S.BookInfo>
      <Form {...formProps} />
      { isLoggedIn && <Button onClick={() => saveInfos()} label="Salvar Descrições" />}
    </S.BookInfo>
  )
}