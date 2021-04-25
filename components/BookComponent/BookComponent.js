import { useRouter } from 'next/router'
import * as S from './BookComponent.style'
import { Books } from '../../Constants/Books'
import BookSinopse from '../../components/BookSinopse';
import BookRelated from '../BookRelated';
import BookSection from '../BookSection';

export default function BookComponent(props){

  return(
    <S.BookComponent>
      <BookSection {...props}/>
      <BookSinopse {...props}/>
      <BookRelated/>
    </S.BookComponent>
  )
}