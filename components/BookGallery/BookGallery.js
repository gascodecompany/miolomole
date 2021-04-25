import EditableImage from '../EditableImage'
import * as S from './BookGallery.style'

export default function BookGallery(props){

 return(
    <S.BookGallery>
      <EditableImage {...props}><S.BookCover /></EditableImage>
    </S.BookGallery>
  )
}