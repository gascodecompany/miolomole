import * as S from './BookGallery.style'

export default function BookGallery({book}){

 return(
    <S.BookGallery>
        <S.BookCover img={book?.cover}/>
    </S.BookGallery>
  )
}