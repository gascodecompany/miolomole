import * as S from './LatestArticle.style'
import { useRouter } from 'next/router';
import Clock from '../../images/js/Clock';
import View from '../../images/js/View';

export default function LatestArticle({ item }){
  const router = useRouter()

  return(
    <S.LatestArticle key={item.ID} >
      <S.LatestArticleImage key={item.IMAGE} src={item.IMAGE} />
      <S.LatestArticleInfo color={item.COLOR} onClick={() => router.push(`/seu-novo-lar/${item.ID}`)}>
        <S.LatestArticleTitle>{item.TITLE}</S.LatestArticleTitle>
        <S.LatestArticleText>{item.TEXT}</S.LatestArticleText>
        <S.Footer>
          <S.FooterItemLabel><Clock />{item.CREATED_AT}</S.FooterItemLabel>
          <S.FooterItemLabel><View />{item.VIEWS}</S.FooterItemLabel>
        </S.Footer>
      </S.LatestArticleInfo>
    </S.LatestArticle>
  )
}
