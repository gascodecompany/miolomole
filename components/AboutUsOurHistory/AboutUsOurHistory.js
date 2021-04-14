import { useEffect, useState } from 'react'
import * as S from './AboutUsOurHistory.style'
import Container from '../Container'
import Editable from '../Editable'

export default function AboutUsOurHistory({ texts }){
  
 return(
    <S.AboutUsOurHistory>
      <Container>
      <S.OurHistoryWrapper>
        <Editable page="aboutUs" textKey="aboutUsOurHistoryTitle" text={texts?.aboutUsOurHistoryTitle}><S.OurHistoryTitle/></Editable>
        <Editable page="aboutUs" textKey="aboutUsOurHistoryText" text={`${texts?.aboutUsOurHistoryText}`}><S.OurHistoryText/></Editable>
        <span className='grayBox'></span>
      </S.OurHistoryWrapper>
      </Container>
    </S.AboutUsOurHistory>
  )
}