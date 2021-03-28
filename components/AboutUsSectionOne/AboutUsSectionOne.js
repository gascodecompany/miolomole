import Container from '../Container'
import Editable from '../Editable'
import * as S from './AboutUsSectionOne.style'

export default function AboutUsSectionOne(props){

 return(
    <S.AboutUsSectionOne>
      <Container>
        <S.SectionOneImages/>
        <Editable {...props} textKey="aboutUsSectionOne"><S.SectionOneText /></Editable>
      </Container>
    </S.AboutUsSectionOne>
  )
}