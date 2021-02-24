import HomeApresentation from "../components/HomeApresentation";
import HomeJumbotron from "../components/HomeJumbotron";
import HomeLatestArticles from "../components/HomeLatestArticles";
import LatestArticles from "../components/LatestArticles";
import pt from "../i18n/pt";

export default function Home() {
  const t = pt
  return (
    <>
      <HomeJumbotron/>
      <HomeApresentation/>
      <LatestArticles items={t.BLOG_ARTICLES}/>
      <HomeLatestArticles/>
    </>
  )
}
