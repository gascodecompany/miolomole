import { useRouter } from 'next/router'
import BookComponent from "../../../components/BookComponent";
import BookAudioVisual from "../../../components/BookComponent";

export default function Book(props){
  const book = props.book ? JSON.parse(props.book) : {} 
  const router = useRouter();
  const splittedId = router.query.name?.split('-');
  const hasAudiovisual = splittedId && splittedId[splittedId.length - 1] === 'audiovisual';
  if (hasAudiovisual) { splittedId.pop() };
  const id = splittedId?.join('-')
  return hasAudiovisual ? <BookAudioVisual {...book} id={id}/> : <BookComponent {...book} id={id} />
}