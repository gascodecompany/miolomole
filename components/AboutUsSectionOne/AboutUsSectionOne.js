import Container from '../Container'
import Editable from '../Editable'
import EditableImage from '../EditableImage'
import * as S from './AboutUsSectionOne.style'

export default function AboutUsSectionOne(props){

 return(
    <S.AboutUsSectionOne>
      <Container>
        <S.SectionOneImages>
          <EditableImage {...props} textKey="sectionOneImageOne"><S.SectionOneImageOne /></EditableImage>
          <EditableImage {...props} textKey="sectionOneImageTwo"><S.SectionOneImageTwo /></EditableImage>
        </S.SectionOneImages>
        <Editable {...props} textKey="aboutUsSectionOne"><S.SectionOneText /></Editable>
      </Container>
    </S.AboutUsSectionOne>
  )
}