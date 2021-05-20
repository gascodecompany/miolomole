import { useRouter } from 'next/router';
import BookComponent from "../../../components/BookComponent";
import BookAudiovisual from "../../../components/BookAudiovisual";

export default function Book(props){
  const book = props?.book ? JSON.parse(props?.book) : [];
  const books = props?.books ? JSON.parse(props?.books) : [];
  const acessivel = props?.acessivel ? props?.acessivel : false;
  return acessivel ? <BookAudiovisual book={book} books={books} /> : <BookComponent book={book} books={books} />
}