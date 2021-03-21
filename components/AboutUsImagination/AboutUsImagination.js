import Container from '../Container'
import Editable from '../Editable'
import * as S from './AboutUsImagination.style'

export default function AboutUsImagination({ texts }){

 return(
    <S.AboutUsImagination>
      <Container>
        <Editable page="aboutUs" textKey="aboutUsImaginationTitle"><S.ImagitationTitle>{texts.aboutUsImagitationTitle}</S.ImagitationTitle></Editable>
        <S.ImaginationWrapper>
          <Editable page="aboutUs" textKey="aboutUsImaginationTextOne"><S.ImaginationTextOne>{texts.aboutUsImaginationTextOne}</S.ImaginationTextOne></Editable>
          <S.ImaginationImgOne/>
          <S.ImaginationImgTwo/>
          <Editable page="aboutUs" textKey="aboutUsImaginationTextTwo"><S.ImaginationTextTwo>{texts.aboutUsImaginationTextTwo}</S.ImaginationTextTwo></Editable>
        </S.ImaginationWrapper>
      </Container>
    </S.AboutUsImagination>
  )
}