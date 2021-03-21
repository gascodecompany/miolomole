import Container from '../Container'
import Editable from '../Editable'
import * as S from './AboutUsSectionOne.style'

export default function AboutUsSectionOne({ texts }){

 return(
    <S.AboutUsSectionOne>
      <Container>
        <S.SectionOneImages/>
        <Editable page="aboutUs" textKey="aboutUsSectionOne"><S.SectionOneText>{texts.aboutUsSectionOne}</S.SectionOneText></Editable>
      </Container>
    </S.AboutUsSectionOne>
  )
}