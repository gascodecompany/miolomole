import axios from 'axios';
import Container from '../Container';
import ReactPlayer from 'react-player';
import { useRouter } from 'next/router';
import Input from '../../Elements/Input';
import * as S from './BookSynopsis.styles';
import { useState, useEffect } from 'react';
import { useAppProvider } from '../../store/appProvider';
import { bookSinopsisFieldsState, bookSinopsisFieldsFunction } from './BookSynopsis.constants';
import Button from '../../Elements/Button';
import mapFieldsToData from '../../utils/mapFieldsToData';
import mapDataToFields from '../../utils/mapDataToFields';
import EditableImage from '../EditableImage';

export default function BookSynopsis({ book, ...props }){
  const router = useRouter();
  const { name } = router.query;
  const { isLoggedIn } = useAppProvider();
  const [message, setMessage] = useState();
  const [fields, setFields] = useState(bookSinopsisFieldsState);
  const synopsisInput = bookSinopsisFieldsFunction({ fields, isLoggedIn })
  
  useEffect(() => {
    book && setFields((oldFields) => {
      const newFields = {...oldFields};
      mapDataToFields({newFields, constantFields: synopsisInput, data: book})
      return newFields
    })
  }, [book])

  const saveInfos = async () => {
    setMessage('')
    const variables = mapFieldsToData(synopsisInput)
    if(!name) {
      const res = await axios.post('/api/livros', { ...variables, name })
      if(res.status === 200){ setMessage('Cadastro realizado com sucesso!')} 
      else { alert(res?.data?.response) }
    } else {
      const res = await axios.put('/api/livros', { ...variables, name })
      if(res.status === 200){ setMessage('Cadastro atualizado com sucesso!')} 
      else { alert(res?.data?.response) }
    }
  }

  return(
    <S.BookSynopsis>
      <Container>
        <S.SynopsisInfo>
          <S.SynopsisWrapper>
            <S.SynopsisTitle>Sinopse</S.SynopsisTitle>
            <S.SynopsisText isLoggedIn={isLoggedIn}><Input {...synopsisInput.synopsis} setFields={setFields} /></S.SynopsisText>
          </S.SynopsisWrapper>
          <S.SynopsisVideo>
            {book?.video && <ReactPlayer url={book?.video} width='100%' height='100%'/>}
            {isLoggedIn && <S.InputVideo />}
          </S.SynopsisVideo>
        </S.SynopsisInfo>
        <EditableImage {...props} book={book} isLoggedIn={isLoggedIn}><S.SynopsisImage /></EditableImage>
        <S.Message>{ message && message }</S.Message>
        { isLoggedIn && <Button id="save" onClick={() => saveInfos()} label="Salvar Sinopse" />}
      </Container>
    </S.BookSynopsis>
  )
}