import { useRouter } from 'next/router'
import PostJumbotron from '../../../components/PostJumbotron'
import LatestArticles from '../../../components/LatestArticles'
import pt from "../../../i18n/pt";
// import BlogEditor from '../../../components/BlogEditor';
import dynamic from 'next/dynamic'

const BlogEditor = dynamic(
  () => import('../../../components/BlogEditor'),
  { ssr: false }
)
export default function Post(){
  const router = useRouter()
  const { id } = router.query
  const t = pt;

 return(
    <>
      <PostJumbotron id={id}/>
      <BlogEditor/>
      <LatestArticles items={t.BLOG_ARTICLES}/>
    </>
  )
}