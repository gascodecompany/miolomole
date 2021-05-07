import { useRouter } from 'next/router';
import BookComponent from "../../../components/BookComponent";
import BookAudiovisual from "../../../components/BookAudiovisual";

export default function Book(props){
  let book = {};
  if(!!props.book) { book = JSON.parse(props?.book) } 
  const router = useRouter();
  const splittedId = router.query.name?.split('-');
  const hasAudiovisual = splittedId && splittedId[splittedId.length - 1] === 'audiovisual';
  if (hasAudiovisual) { splittedId.pop() };
  const id = splittedId?.join('-')
  return hasAudiovisual ? <BookAudiovisual book={book} id={id}/> : <BookComponent book={book} id={id} />
}