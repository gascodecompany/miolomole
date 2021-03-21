import HomeApresentation from "../components/HomeApresentation";
import HomeJumbotron from "../components/HomeJumbotron";
import HomeLatestArticles from "../components/HomeLatestArticles";
import LatestArticles from "../components/LatestArticles";
import AboutUsSlider from "../components/AboutUsSlider";
import HomeBanners from "../components/HomeBanners";
import pt from "../i18n/pt";

export default function Home({ texts }) {
  const t = pt
  return (
    <>
      <HomeJumbotron/>
      <HomeApresentation texts={texts}/>
      <HomeBanners/>
      <LatestArticles items={t.BLOG_ARTICLES}/>
      <AboutUsSlider/>
      <HomeLatestArticles/>
    </>
  )
}

export async function getStaticProps() {
  const textsArray = await fetch('http://localhost:3000/api/textos?page=home')
    .then((res) => res.json())
    .catch((res) => console.log(res));
  const texts = textsArray.reduce((object, text) => Object.assign(object, {[text.textKey]: text.text}), {});
  if (!texts) { return { notFound: true }}
  return { 
    props: { texts }, 
    // revalidate: 1 
  }
}