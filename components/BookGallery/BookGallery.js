import EditableImage from '../EditableImage'
import * as S from './BookGallery.style'

export default function BookGallery({ book }){
  const bookArray = book?.images ? book?.images : ['https://placekitten.com/400/400', 'https://placekitten.com/400/400', 'https://placekitten.com/400/400', 'https://placekitten.com/400/400']
  return(
    <S.BookGallery>
      { bookArray.map((img) => (
        <S.BookCover key={img} src={img}/>
      ))}
    </S.BookGallery>
  )
}