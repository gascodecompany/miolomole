import { useRouter } from 'next/router';
import BookComponent from "../../../components/BookComponent";
import BookAudiovisual from "../../../components/BookAudiovisual";

export default function Book(props){
  const book = props?.book ? JSON.parse(props?.book) : [];
  const books = props?.books ? JSON.parse(props?.books) : [];
  const hasAudiovisual = props?.hasAudiovisual ? props?.hasAudiovisual : false;
  return hasAudiovisual ? <BookAudiovisual book={book} books={books} /> : <BookComponent book={book} books={books} />
}