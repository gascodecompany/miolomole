import { useEffect, useState } from 'react'
import Container from '../Container'
import Editable from '../Editable'
import * as S from './HomeApresentation.style'

export default function HomeApresentation({ texts, ...props }) {

  return(
    <S.HomeApresentation>
      <Container>
        <S.HomeApresentationImage/>
        <S.HomeInfo>
          <Editable page="home" textKey="homeApresentationTitle" {...props} ><S.HomeApresentationTitle>{texts.homeApresentationTitle}</S.HomeApresentationTitle></Editable>
          <Editable page="home" textKey="homeApresentationCall" {...props} ><S.HomeApresentationText>{texts.homeApresentationCall}</S.HomeApresentationText></Editable>
        </S.HomeInfo>
      </Container>
    </S.HomeApresentation>
  )
}
