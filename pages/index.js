import HomeApresentation from "../components/HomeApresentation";
import HomeJumbotron from "../components/HomeJumbotron";
import HomeLatestArticles from "../components/HomeLatestArticles";
import LatestArticles from "../components/LatestArticles";
import AboutUsSlider from "../components/AboutUsSlider";
import HomeBanners from "../components/HomeBanners";
import pt from "../i18n/pt";
import mongoose from 'mongoose';
import Text from '../models/text'

export default function Home(props) {
  const t = pt
  return (
    <>
      <HomeJumbotron/>
      <HomeApresentation {...props}/>
      <HomeBanners/>
      <LatestArticles items={t.BLOG_ARTICLES}/>
      <AboutUsSlider/>
      <HomeLatestArticles/>
    </>
  )
}

export async function getStaticProps() {
  await mongoose.connect(process.env.MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const page = 'home'
  const textsArray = await Text.find({ page });
  const texts = textsArray.reduce((object, text) => Object.assign(object, {[text.textKey]: text.text}), {});
  return { props: { texts, page }, revalidate: 1 }
}