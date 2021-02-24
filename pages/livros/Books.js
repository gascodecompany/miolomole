import BooksJumbotron from "../../components/BooksJumbotron";
import OurProductsList from "../../components/OurProductsList";
import LatestArticles from "../../components/LatestArticles";
import HomeLatestArticles from "../../components/HomeLatestArticles";
import pt from "../../i18n/pt";

export default function Books(){
  const t = pt;

  return(
    <div>
      <BooksJumbotron/>
      <OurProductsList/>
      <LatestArticles items={t.BLOG_ARTICLES}/>
      <HomeLatestArticles />
    </div>
  )
}