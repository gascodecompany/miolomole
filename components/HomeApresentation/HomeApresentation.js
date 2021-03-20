import { useEffect, useState } from 'react'
import Container from '../Container'
import Editable from '../Editable'
import * as S from './HomeApresentation.style'
import parser from 'html-react-parser';

export default function HomeApresentation(){
  const [texts, setTexts] = useState({ title: '', call: '' });

  useEffect(() => {
    fetch('http://localhost:3000/api/textos')
      .then((res) => res.json())
      .then((res) => { setTexts(res) });
  }, [])

  return(
    <S.HomeApresentation>
      <Container>
        <S.HomeApresentationImage/>
        <S.HomeInfo>
          <Editable value={texts.title}><S.HomeApresentationTitle /></Editable>
          <Editable value={texts.call}><S.HomeApresentationText/></Editable>
        </S.HomeInfo>
      </Container>
    </S.HomeApresentation>
  )
}