import HomeApresentation from "../components/HomeApresentation";
import HomeJumbotron from "../components/HomeJumbotron";
import HomeLatestArticles from "../components/HomeLatestArticles";
import LatestArticles from "../components/LatestArticles";
import AboutUsSlider from "../components/AboutUsSlider";
import HomeBanners from "../components/HomeBanners";
import pt from "../i18n/pt";
import mongoose from 'mongoose';
import Text from '../models/text'

export default function Home({ texts, ...props }) {
  const t = pt;

  return (
    <>
      <HomeJumbotron/>
      <HomeApresentation texts={texts} {...props}/>
      <HomeBanners/>
      <LatestArticles items={t.BLOG_ARTICLES}/>
      <AboutUsSlider/>
      <HomeLatestArticles/>
    </>
  )
}

export async function getStaticProps() {
  await mongoose.connect(process.env.mongodburl, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const textsArray = await Text.find({ page: 'home' });
  const texts = textsArray.reduce((object, text) => Object.assign(object, {[text.textKey]: text.text}), {});
  return { props: { texts }, revalidate: 1 }
}