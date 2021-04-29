import EditableImage from '../EditableImage'
import * as S from './BookGallery.style'

export default function BookGallery({ book, ...props }){
  const bookArray = book?.images ? book?.images : ['https://placekitten.com/400/400', 'https://placekitten.com/400/400', 'https://placekitten.com/400/400', 'https://placekitten.com/400/400']
  return(
    <S.BookGallery>
      <EditableImage {...props} textKey="bookGalleryCover"><S.BookCover /></EditableImage>
    </S.BookGallery>
  )
}