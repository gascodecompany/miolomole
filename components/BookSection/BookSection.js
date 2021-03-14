import * as S from './BookSection.style'
import BookInfo from '../BookInfo/BookInfo'
import Container from '../Container'
import BookGallery from '../BookGallery'

export default function BookSection({book}){

 return(
    <S.BookSection>
      <Container>
        <BookGallery book={book}/>
        <BookInfo book={book}/>
      </Container>
    </S.BookSection>
  )
}