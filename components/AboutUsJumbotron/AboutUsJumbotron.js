import * as S from './AboutUsJumbotron.style'
import EditableImage from '../EditableImage'

export default function AboutUsJumbotron(props){

 return(
    <S.AboutUsJumbotronContainer>
      <EditableImage {...props} textKey="aboutUsJumbotronImage"><S.AboutUsJumbotronImage /></EditableImage>
    </S.AboutUsJumbotronContainer>
  )
}