import * as S from './BookComponent.style'
import BookSynopsis from '../BookSynopsis';
import BookRelated from '../BookRelated';
import BookSection from '../BookSection';
import BookSpotlight from '../BookSpotlight';

export default function BookComponent(props){
  return(
    <S.BookComponent>
      <BookSection {...props} />
      <BookSynopsis {...props} />
      <BookSpotlight {...props} />
      <BookRelated/>
    </S.BookComponent>
  )
}