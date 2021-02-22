import * as S from './AboutUsSlider.style'
import pt from '../../i18n/pt';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function AboutUsSlider(){
const t = pt;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1.5,
  slidesToScroll: 1,
  ltr: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

return(
  <S.AboutUsSlider id='AboutUsSlider'>
    <S.AboutUsSliderContainer>
      <S.SliderInfo>
        <S.SliderTitle>AUTORES E ILUSTRADORES</S.SliderTitle>
        <S.SliderDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing eli adipiscing eli. </S.SliderDescription>
      </S.SliderInfo>
        <S.SliderCards>
          <Slider {...settings}>
            {t.ABOUT_US.SLIDER.CARDS.map((item) => (
              <S.SliderCard key={item.NAME}>
                <S.CardPicture src={item.PICTURE} />
                <S.SliderCardContainer>
                  <S.CardTitle>{item.NAME}</S.CardTitle>
                  <S.CardDescription>{item.DESCRIPTION}</S.CardDescription>
                </S.SliderCardContainer>
              </S.SliderCard>
            ))}
          </Slider>
        </S.SliderCards>
    </S.AboutUsSliderContainer>
  </S.AboutUsSlider>
  )
}
