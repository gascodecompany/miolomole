import pt from "../i18n/pt";
import mongoose from 'mongoose';
import Text from '../models/text';
import Book from '../models/book';
import Banner from '../components/Banner';
import AboutUsSlider from "../components/AboutUsSlider";
import SpotlightBooksJumbotron from "../components/SpotlightBooksJumbotron";
import LatestArticles from "../components/LatestArticles";
import HomeApresentation from "../components/HomeApresentation";
import HomeLatestArticles from "../components/HomeLatestArticles";

export default function Home(props) {
  const t = pt
  return (
    <>
      <SpotlightBooksJumbotron {...props} />
      <HomeApresentation {...props}/>
      <Banner {...props} index={1}/>
      <Banner {...props} index={2}/>
      <Banner {...props} index={3}/>
      <Banner {...props} index={4}/>
      <LatestArticles items={t.BLOG_ARTICLES}/>
      <AboutUsSlider/>
      <HomeLatestArticles/>
    </>
  )
}

export async function getStaticProps() {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const page = 'home';
  const textsArray = await Text.find({ page });
  const texts = textsArray.reduce((object, text) => Object.assign(object, {[text.textKey]: text.text}), {});
  const booksArray = await Book.find({ "spotlight.isActive": "true" });
  const spotlightBooks = !!booksArray.length ? JSON.stringify(booksArray) : '[]';
  return { props: { texts, page, spotlightBooks }, revalidate: 1 }
}