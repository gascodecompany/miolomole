import { useRouter } from 'next/router'
import BookComponent from "../../../components/BookComponent";

export default function Book(){
  const router = useRouter()
  const { id } = router.query

 return(
    <>
      <BookComponent id={ id }/>
    </>
  )
}