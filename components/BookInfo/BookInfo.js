import * as S from './BookInfo.style'

export default function BookInfo(props){
  const { 
    title,
    authors,
    ilustration,
    size,
    pages,
    ageIndication,
    genre,
    themes,
    isbn,
  } = props

  return(
    <S.BookInfo>
      <S.BookInfoTitle>{title}</S.BookInfoTitle>
      <S.BookInfoItem><b>Autoria: </b><p>{authors}</p></S.BookInfoItem>
      <S.BookInfoItem><b>Ilustrações: </b><p>{ilustration}</p></S.BookInfoItem>
      <S.BookInfoItem><b>Tamanho: </b><p>{size}</p></S.BookInfoItem>
      <S.BookInfoItem><b>Páginas: </b><p>{pages}</p></S.BookInfoItem>
      <S.BookInfoItem><b>Indicação etária: </b><p>{ageIndication}</p></S.BookInfoItem>
      <S.BookInfoItem><b>Gênero: </b><p>{genre}</p></S.BookInfoItem>
      <S.BookInfoItem><b>Temas: </b><p>{themes}</p></S.BookInfoItem>
      <S.BookInfoItem><b>ISBN: </b><p>{isbn}</p></S.BookInfoItem>
    </S.BookInfo>
  )
}