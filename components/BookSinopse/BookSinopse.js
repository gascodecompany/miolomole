import * as S from './BookSinopse.style'
import Container from '../Container'

export default function BookSinopse({book}){

 return(
    <S.BookSinopse>
      <Container>
        <S.SinopseInfo>
          <S.SinopseTitle>Sinopse</S.SinopseTitle>
          <S.SinopseText>{book?.synopsis}</S.SinopseText>
        </S.SinopseInfo>
      </Container>
    </S.BookSinopse>
  )
}