import { useRouter } from 'next/router'
import pt from "../../i18n/pt";
import * as S from './PostJumbotron.style'

export default function PostJumbotron(){
  const t = pt;
  const router = useRouter()
  const { id } = router.query
  const post = t.BLOG_ARTICLES.find((post) => post?.ID == id);

 return(
    <S.PostJumbotron img={post?.JUMBOTRON}/>
  )
}