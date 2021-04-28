import axios from 'axios';
import Container from '../Container';
import ReactPlayer from 'react-player';
import { useRouter } from 'next/router';
import Input from '../../Elements/Input';
import * as S from './BookSinopsis.style';
import { useState, useEffect } from 'react';
import { useAppProvider } from '../../store/appProvider';
import { bookSinopsisFieldsState, bookSinopsisFieldsFunction } from './BookSinopsis.constants';
import Button from '../../Elements/Button';
import mapFieldsToData from '../../utils/mapFieldsToData';

export default function BookSinopsis({book}){
  const router = useRouter();
  const { name } = router.query;
  const { isLoggedIn } = useAppProvider();
  const [message, setMessage] = useState();
  const [fields, setFields] = useState(bookSinopsisFieldsState);
  const sinopsisInput = bookSinopsisFieldsFunction({ fields, isLoggedIn })

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
    <S.BookSinopse>
      <Container>
        <S.SinopseInfo>
          <S.SinopseTitle>Sinopse</S.SinopseTitle>
          <S.SinopseText isLoggedIn={isLoggedIn}><Input {...sinopsisInput.sinopsys} setFields={setFields} /></S.SinopseText>
          <S.SinopseVideo>
            {isLoggedIn && <span>Video</span>}
            {
              book?.video 
                ? <ReactPlayer url={book?.video} width='100%' height='100%'/>
                : <img src="https://placekitten.com/400/200"/>
            }
          </S.SinopseVideo>
        </S.SinopseInfo>
        {
          !!book?.images.length 
            ? <S.SinopseImage img={book?.cover} />
            : <S.SinopseImage img='' />
          }
        <S.Message>{ message && message }</S.Message>
        { isLoggedIn && <Button onClick={() => saveInfos()} label="Salvar Descrições" />}
      </Container>
    </S.BookSinopse>
  )
}