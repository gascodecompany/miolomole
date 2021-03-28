import { useEffect, useState } from 'react'
import * as S from './AboutUsOurHistory.style'
import Container from '../Container'
import Editable from '../Editable'

export default function AboutUsOurHistory(props){
  
 return(
    <S.AboutUsOurHistory>
      <Container>
      <S.OurHistoryWrapper>
        <Editable {...props} textKey="aboutUsOurHistoryTitle"><S.OurHistoryTitle /></Editable>
        <Editable {...props} textKey="aboutUsOurHistoryText"><S.OurHistoryText /></Editable>
        <span className='grayBox'></span>
      </S.OurHistoryWrapper>
      </Container>
    </S.AboutUsOurHistory>
  )
}