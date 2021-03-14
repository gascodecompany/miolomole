import * as S from './BookSinopse.style'
import Container from '../Container'
import ReactPlayer from 'react-player'

export default function BookSinopse({book}){

 return(
    <S.BookSinopse>
      <Container>
        <S.SinopseInfo>
          <S.SinopseTitle>Sinopse</S.SinopseTitle>
          <S.SinopseText>{book?.synopsis}</S.SinopseText>
          <S.SinopseVideo>
            <ReactPlayer
              url={book.video}
              width='40%'
              height='40%'
            />
          </S.SinopseVideo>
        </S.SinopseInfo>
        <S.SinopseImage img={book?.cover3d}/>
      </Container>
    </S.BookSinopse>
  )
}