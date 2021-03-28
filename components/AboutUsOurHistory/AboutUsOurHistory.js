import { useEffect, useState } from 'react'
import * as S from './AboutUsOurHistory.style'
import Container from '../Container'
import Editable from '../Editable'
import EditableImage from '../EditableImage'

export default function AboutUsOurHistory(props){
  console.log(props)
 return(
    <S.AboutUsOurHistory>
      <Container>
      <S.OurHistoryWrapper>
        <Editable {...props} textKey="aboutUsOurHistoryTitle"><S.OurHistoryTitle /></Editable>
        <Editable {...props} textKey="aboutUsOurHistoryText"><S.OurHistoryText /></Editable>
        <EditableImage {...props} textKey="aboutUsOurHistoryImage"><S.AboutUsOurHistoryImage /></EditableImage>
      </S.OurHistoryWrapper>
      </Container>
    </S.AboutUsOurHistory>
  )
}