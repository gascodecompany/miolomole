import pt from '../../i18n/pt';
import Container from '../Container';
import * as S from './LatestArticles.style';
import LatestArticle from '../LatestArticle/LatestArticle';
import { useRef } from 'react';


export default function LatestArticles({ items }){
  const slider = useRef()

  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
console.log(slider)
  return(
    <S.LatestArticles>
      <Container>
        <S.LeftContainer>
          <S.Title>Confira os últimos artigos da Miolo Mole</S.Title>
          <S.Arrows>
            <S.Prev className="arrow" onClick={() => slider.current.slickPrev()}/>
            <S.Next className="arrow" onClick={() => slider.current.slickNext()}/>
          </S.Arrows>
        </S.LeftContainer>
        <S.LatestArticlesList ref={slider} { ...settings }>
          {items.map((art) => <LatestArticle key={art + 'articles'} item={art}/>)}
        </S.LatestArticlesList>
      </Container>
    </S.LatestArticles>
  )
}