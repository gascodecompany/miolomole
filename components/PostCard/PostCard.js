import * as S from './PostCard.style'
import { useRouter } from 'next/router';
import Clock from '../../images/js/Clock';
import View from '../../images/js/View';

export default function PostCard({ item }){
  const router = useRouter()

  return(
    <S.PostCard key={item.ID} >
      <S.PostCardImage key={item.IMAGE} src={item.IMAGE} />
      <S.PostCardInfo color={item.COLOR} onClick={() => router.push(`/seu-novo-lar/${item.ID}`)}>
        <S.PostCardTitle>{item.TITLE}</S.PostCardTitle>
        <S.PostCardText>{item.TEXT}</S.PostCardText>
        <S.Footer>
          <S.FooterItemLabel><Clock />{item.CREATED_AT}</S.FooterItemLabel>
          <S.FooterItemLabel><View />{item.VIEWS}</S.FooterItemLabel>
        </S.Footer>
      </S.PostCardInfo>
    </S.PostCard>
  )
}
