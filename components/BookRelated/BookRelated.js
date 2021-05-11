import * as S from './BookRelated.style'
import Container from '../Container'
import Button from '../../Elements/Button'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function BookRelated(props){
  const [books, setBooks] = useState();
  const router = useRouter();
  const { name } = router.query
  useEffect(() => props.books && setBooks(props.books), [props])

  return(
    <S.BookRelated>
      <Container>
        <S.RelatedTitle>Livros relacionados</S.RelatedTitle>
        <S.RelatedBooks>
          { books?.sort(() => .5 - Math.random()).filter(((book) => book.name !== name)).slice(0,4).map((book) => (
            <S.BookRelatedCard key={book._id}>
              <S.BookRelatedCover img={book?.image || 'https://placekitten.com/400/400'}/>
              <S.BookRelatedItemTitle>{book.title}</S.BookRelatedItemTitle>
              <Button label='Ver mais' variation="secondary" onClick={() => router.push(`/livros/${book.name}`)}/>
            </S.BookRelatedCard>
          ))}
        </S.RelatedBooks>
      </Container>

    </S.BookRelated>
  )
}