import Player from '../Player';
import { useState } from 'react';
import * as S from './BookAudiovisual.styles';

export default function BookAudiovisual(props){
  const visual = props?.book?.audio?.visual ? props.book.audio.visual : '';
  const description = props?.book?.audio?.description ? props.book.audio.description : '';
  return(
    <S.BookAcessivel>
      <S.Book>
        <S.BookWrapper>
          <S.Title>Audio visual</S.Title>
          {visual ? <Player src={visual} /> : 'Não cadastrado'}
        </S.BookWrapper>
      </S.Book>
      <S.Book className="describle">
        <S.BookWrapper>
          <S.Title>Audio descritivo</S.Title>
          {description ? <Player src={description} /> : 'Não cadastrado'}
        </S.BookWrapper>
      </S.Book>
    </S.BookAcessivel>
  )
}