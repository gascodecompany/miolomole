import * as S from './BookRelated.style'
import Container from '../Container'
import Button from '../../Elements/Button'
import { Books } from '../../Constants/Books'

export default function BookRelated(){

 return(
    <S.BookRelated>
      <Container>
        <S.RelatedTitle>Livros relacionados</S.RelatedTitle>
        <S.RelatedBooks>
          { Books?.slice(0, 4).map((book) => (
            <S.BookRelatedCard>
              <S.BookRelatedCover img={book?.cover3d}/>
              <S.BookRelatedItemTitle>{book.title}</S.BookRelatedItemTitle>
              <Button label='Enviar'/>
            </S.BookRelatedCard>
          ))}
        </S.RelatedBooks>
      </Container>

    </S.BookRelated>
  )
}