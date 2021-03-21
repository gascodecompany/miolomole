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
<<<<<<< HEAD
          <Editable value={texts.homeApresentationTitle}><S.HomeApresentationTitle /></Editable>
          {/* <Editable value={texts.call}><S.HomeApresentationText/></Editable> */}
=======
          <Editable value={texts.title}><S.HomeApresentationTitle/></Editable>
          <Editable value={texts.call}><S.HomeApresentationText/></Editable>
>>>>>>> 8f31f82f50e214b7ca19b8d5d0969ca1e1d82589
        </S.HomeInfo>
      </Container>
    </S.HomeApresentation>
  )
}
