import { useEffect, useState } from 'react'
import Container from '../Container'
import Editable from '../Editable'
import * as S from './HomeApresentation.style'
import parser from 'html-react-parser';

export default function HomeApresentation({texts}) {

  return(
    <S.HomeApresentation>
      <Container>
        <S.HomeApresentationImage/>
        <S.HomeInfo>
          <Editable textKey="homeApresentationTitle" text={texts.homeApresentationTitle}><S.HomeApresentationTitle /></Editable>
          <Editable value={texts.homeApresentationCall}><S.HomeApresentationText/></Editable>
        </S.HomeInfo>
      </Container>
    </S.HomeApresentation>
  )
}
