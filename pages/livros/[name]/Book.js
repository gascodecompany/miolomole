import { useRouter } from 'next/router';
import BookComponent from "../../../components/BookComponent";
import BookAudiovisual from "../../../components/BookAudiovisual";
import { useEffect, useState } from 'react';

export default function Book(props){
  const [book, setBook] = useState(props?.book ? JSON.parse(props?.book) : []);
  const [books, setBooks] = useState(props?.books ? JSON.parse(props?.books) : []);
  
  const router = useRouter();
  const splittedId = router.query.name?.split('-');
  const hasAudiovisual = splittedId && splittedId[splittedId.length - 1] === 'audiovisual';
  if (hasAudiovisual) { splittedId.pop() };
  const id = splittedId?.join('-')
  return hasAudiovisual ? <BookAudiovisual book={book} books={books} id={id}/> : <BookComponent book={book} books={books} id={id} />
}