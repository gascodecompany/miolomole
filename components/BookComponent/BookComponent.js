import { useRouter } from 'next/router'
import * as S from './BookComponent.style'
import { Books } from '../../Constants/Books'
import BookInfo from '../BookInfo/BookInfo'
import BookSinopse from '../../components/BookSinopse';

export default function BookComponent(){
  const router = useRouter()
  const { id } = router.query
  const book = Books.find((book) => book?._id == id);

return(
    <S.BookComponent>
      <S.BookSection>
        <S.BookGalery>
          <S.BookCover img={book?.cover}/>
        </S.BookGalery>
        <BookInfo book={book}/>
      </S.BookSection>
      <BookSinopse book={book}/>
    </S.BookComponent>
  )
}