import * as S from './HomeBanners.style'
import pt from '../../i18n/pt';

export default function HomeBanners(){
  const t = pt;

 return(
    <S.HomeBanners>
      {t.BANNERS.map((item) => (
        <S.Banner key={item} img={item}/>
      ))}
    </S.HomeBanners>
  )
}