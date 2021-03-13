import Container from '../Container'
import * as S from './BlogList.style'
import pt from "../../i18n/pt";
import PostCard from '../PostCard'

export default function BlogList(){
  const t = pt
  const items = t.BLOG_ARTICLES

 return(
   <Container>
    <S.BlogList>
      {items.map((art) => <PostCard key={art + 'articles'} item={art}/>)}
    </S.BlogList>
   </Container>
  )
}