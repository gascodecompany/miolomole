import Container from '../Container'
import Editable from '../Editable'
import * as S from './AboutUsImagination.style'

export default function AboutUsImagination(props){

 return(
    <S.AboutUsImagination>
      <Container>
        <Editable {...props} textKey="aboutUsImaginationTitle"><S.ImagitationTitle /></Editable>
        <S.ImaginationWrapper>
          <Editable {...props} textKey="aboutUsImaginationTextOne"><S.ImaginationTextOne /></Editable>
          <S.ImaginationImgOne/>
          <S.ImaginationImgTwo/>
          <Editable {...props} textKey="aboutUsImaginationTextTwo"><S.ImaginationTextTwo /></Editable>
        </S.ImaginationWrapper>
      </Container>
    </S.AboutUsImagination>
  )
}