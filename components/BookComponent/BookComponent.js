import * as S from './BookComponent.style'
import BookSinopse from '../BookSinopsis';
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