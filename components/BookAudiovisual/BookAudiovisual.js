import Player from '../Player';
import * as S from './BookAudiovisual.styles';

export default function BookAudiovisual({ audioVisual, audioDescricao }){

  return(
    <S.BookAcessivel>
      <S.Book>
        <S.BookWrapper>
          <S.Title>Audio visual</S.Title>
          <Player/>
        </S.BookWrapper>
      </S.Book>
      <S.Book className="describle">
        <S.BookWrapper>
          <S.Title>Audio descritivo</S.Title>
          <Player />
        </S.BookWrapper>
      </S.Book>
    </S.BookAcessivel>
  )
}