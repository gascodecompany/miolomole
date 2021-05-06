import pt from "../../i18n/pt";
import { useRouter } from 'next/router';
import AboutUsSlider from '../../components/AboutUsSlider';
import LatestArticles from "../../components/LatestArticles";
import OurProductsList from "../../components/OurProductsList";
import HomeLatestArticles from "../../components/HomeLatestArticles";
import SpotlightBooksJumbotron from "../../components/SpotlightBooksJumbotron";

export default function BooksList(props){
  const router = useRouter();
  const { id } = router.query;
  const t = pt;

  return(
    <div>
      <SpotlightBooksJumbotron {...props} />
      <OurProductsList {...props} id={id} />
      <LatestArticles items={t.BLOG_ARTICLES}/>
      <AboutUsSlider/>
      <HomeLatestArticles id={id} />
    </div>
  )
}