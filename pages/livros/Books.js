import { useRouter } from 'next/router'
import BooksJumbotron from "../../components/BooksJumbotron";
import OurProductsList from "../../components/OurProductsList";
import LatestArticles from "../../components/LatestArticles";
import HomeLatestArticles from "../../components/HomeLatestArticles";
import pt from "../../i18n/pt";
import BookComponent from "../../components/BookComponent";
import { Books } from '../../Constants/Books'

export default function BooksList(){
  const router = useRouter();
  const {id} = router.query
  const t = pt;

  return(
    <div>
      <BooksJumbotron/>
      <OurProductsList items={Books} id={id} />
      <LatestArticles items={t.BLOG_ARTICLES}/>
      <HomeLatestArticles id={id} />
      {/* <BookComponent/> */}
    </div>
  )
}