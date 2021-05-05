import { useRouter } from 'next/router'
import SpotlightBooksJumbotron from "../../components/SpotlightBooksJumbotron";
import OurProductsList from "../../components/OurProductsList";
import LatestArticles from "../../components/LatestArticles";
import HomeLatestArticles from "../../components/HomeLatestArticles";
import pt from "../../i18n/pt";
import AboutUsSlider from '../../components/AboutUsSlider';

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