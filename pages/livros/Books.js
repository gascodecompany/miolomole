import pt from "../../i18n/pt";
import { useRouter } from 'next/router';
import AboutUsSlider from '../../components/AboutUsSlider';
import LatestArticles from "../../components/LatestArticles";
import OurProductsList from "../../components/OurProductsList";
import HomeLatestArticles from "../../components/HomeLatestArticles";
import SpotlightBooksJumbotron from "../../components/SpotlightBooksJumbotron";
import { useAppProvider } from "../../store/appProvider";

export default function BooksList(props){
  const router = useRouter();
  const { isLoggedIn } = useAppProvider();
  const { id } = router.query;
  const t = pt;

  return(
    <div>
      <SpotlightBooksJumbotron {...props} />
      <OurProductsList {...props} id={id} />
      { isLoggedIn && <LatestArticles items={t.BLOG_ARTICLES}/> }
      <AboutUsSlider {...props} />
      <HomeLatestArticles id={id} />
    </div>
  )
}