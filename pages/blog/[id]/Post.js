import { useRouter } from 'next/router'
import PostJumbotron from '../../../components/PostJumbotron'
import LatestArticles from '../../../components/LatestArticles'
import pt from "../../../i18n/pt";

export default function Post(){
  const router = useRouter()
  const { id } = router.query
  const t = pt;

 return(
    <>
      <PostJumbotron id={id}/>
      <LatestArticles items={t.BLOG_ARTICLES}/>
    </>
  )
}