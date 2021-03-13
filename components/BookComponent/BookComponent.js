import { useRouter } from 'next/router'
import * as S from './BookComponent.style'
import { Books } from '../../Constants/Books'
import BookInfo from '../BookInfo/BookInfo'

export default function BookComponent(){
  const router = useRouter()
  const { id } = router.query
  const book = Books.find((book) => book?._id == id);

return(
    <S.BookComponent>
      <S.BookGalery>
        
      </S.BookGalery>
      <BookInfo book={book}/>
    </S.BookComponent>
  )
}