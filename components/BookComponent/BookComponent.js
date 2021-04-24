import { useRouter } from 'next/router'
import * as S from './BookComponent.style'
import { Books } from '../../Constants/Books'
import BookSinopse from '../../components/BookSinopse';
import BookRelated from '../BookRelated';
import BookSection from '../BookSection';

export default function BookComponent(){
  const router = useRouter()
  const { id } = router.query
  const book = Books.find((book) => book?._id == id);

return(
    <S.BookComponent>
      <BookSection book={book}/>
      <BookSinopse book={book}/>
      <BookRelated/>
    </S.BookComponent>
  )
}