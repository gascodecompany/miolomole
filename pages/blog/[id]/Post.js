import pt from "../../../i18n/pt";
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useAppProvider } from '../../../store/appProvider';
import PostJumbotron from '../../../components/PostJumbotron';
import LatestArticles from '../../../components/LatestArticles';

const BlogEditor = dynamic(
  () => import('../../../components/BlogEditor'),
  { ssr: false }
);

export default function Post(){
  const router = useRouter();
  const { id } = router.query;
  const t = pt;
  const { isLoggedIn } = useAppProvider();

 return(
    <>
      <PostJumbotron id={id}/>
      <BlogEditor/>
      { isLoggedIn && <LatestArticles items={t.BLOG_ARTICLES}/> }
    </>
  )
}