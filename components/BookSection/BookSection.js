import * as S from './BookSection.style'
import BookInfo from '../BookInfo/BookInfo'
import Container from '../Container'
import BookGallery from '../BookGallery'

export default function BookSection(props){

 return(
    <S.BookSection>
      <Container>
        <BookGallery {...props}/>
        <BookInfo {...props}/>
      </Container>
    </S.BookSection>
  )
}