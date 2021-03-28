import Container from '../Container'
import * as S from './BlogJumbotron.style'
import EditableImage from '../EditableImage'
import Editable from '../Editable'

export default function BlogJumbotron(props){

 return(
    <S.BlogJumbotronContainer>
      <EditableImage {...props} textKey="blogJumbotronImage"><S.BlogJumbotronImage /></EditableImage>
      <Container>
        <Editable {...props} textKey="blogJumbotronTitle"><S.BlogJumbotronTitle/></Editable>
      </Container>
    </S.BlogJumbotronContainer>
  )
}