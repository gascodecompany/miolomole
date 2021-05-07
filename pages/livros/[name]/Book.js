import { useRouter } from 'next/router';
import BookComponent from "../../../components/BookComponent";
import BookAudiovisual from "../../../components/BookAudiovisual";
import { useEffect, useState } from 'react';

export default function Book(props){
  const [book, setBook] = useState();
  const [books, setBooks] = useState();

  useEffect(() => {
    if(!!props.book) { setBook(JSON.parse(props.book)) } 
    if(!!props.books?.length) { setBooks(JSON.parse(props.books)) } 
  }, [props])
  
  const router = useRouter();
  const splittedId = router.query.name?.split('-');
  const hasAudiovisual = splittedId && splittedId[splittedId.length - 1] === 'audiovisual';
  if (hasAudiovisual) { splittedId.pop() };
  const id = splittedId?.join('-')
  return hasAudiovisual ? <BookAudiovisual book={book} books={books} id={id}/> : <BookComponent book={book} books={books} id={id} />
}