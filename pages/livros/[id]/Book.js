import { useRouter } from 'next/router'
import BookComponent from "../../../components/BookComponent";
import BookAudioVisual from "../../../components/BookComponent";

export default function Book(){
  const router = useRouter();
  const splittedId = router.query.id?.split('-');
  const hasAudiovisual = splittedId && splittedId[splittedId.length - 1] === 'audiovisual';
  if (hasAudiovisual) { splittedId.pop() };
  const id = splittedId?.join('-')
  return hasAudiovisual ? <BookAudioVisual id={id} /> : <BookComponent id={id}/>
}