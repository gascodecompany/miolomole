import * as S from './BookInfo.style'

export default function BookInfo({book}){

 return(
  <S.BookInfo>
    <S.BookInfoTitle>{book?.title}</S.BookInfoTitle>
    <S.BookInfoItem><b>Autoria: </b><p>{book?.authors}</p></S.BookInfoItem>
    <S.BookInfoItem><b>Ilustrações: </b><p>{book?.ilustration}</p></S.BookInfoItem>
    <S.BookInfoItem><b>Tamanho: </b><p>{book?.size}</p></S.BookInfoItem>
    <S.BookInfoItem><b>Páginas: </b><p>{book?.pages}</p></S.BookInfoItem>
    <S.BookInfoItem><b>Indicação etária: </b><p>{book?.ageIndication}</p></S.BookInfoItem>
    <S.BookInfoItem><b>Gênero: </b><p>{book?.gender}</p></S.BookInfoItem>
    <S.BookInfoItem><b>Temas: </b><p>{book?.themes}</p></S.BookInfoItem>
    <S.BookInfoItem><b>ISBN: </b><p>{book?.isbn}</p></S.BookInfoItem>
  </S.BookInfo>
  )
}