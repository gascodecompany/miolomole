import * as S from './BookRelated.style'
import Container from '../Container'
import Button from '../../Elements/Button'
import { useEffect, useState } from 'react';

export default function BookRelated(props){
  const [books, setBooks] = useState();
  useEffect(() => props.books && setBooks(JSON.parse(props.books)), [props])

  return(
    <S.BookRelated>
      <Container>
        <S.RelatedTitle>Livros relacionados</S.RelatedTitle>
        <S.RelatedBooks>
          { books?.map((book) => (
            <S.BookRelatedCard key={book._id}>
              <S.BookRelatedCover img={book?.image || 'https://placekitten.com/400/400'}/>
              <S.BookRelatedItemTitle>{book.title}</S.BookRelatedItemTitle>
              <Button label='Ver mais' variant="secondary"/>
            </S.BookRelatedCard>
          ))}
        </S.RelatedBooks>
      </Container>

    </S.BookRelated>
  )
}