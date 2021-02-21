import * as S from './HomeJumbotron.style';
import homeJumbotron from '../../images/icons/bg-home.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Container from '../Container';

const itemsJumbotron = [
  {
    name: 'kingCrown',
    label: 'Rei coroa',
    description: 'Aqui ficaria animações, ilustrações e lançamentos dos livros',
    title: 'Lorem Ipsum Lorem Ipsum',
    jumbotron: homeJumbotron,
  },
  {
    name: 'kingCrown2',
    label: 'Coroa 2',
    description: 'Aqui ficaria outra animações, ilustrações e lançamentos dos livros',
    title: 'Ipson Lorem Ipsum Lorem Ipsum',
    jumbotron: homeJumbotron,
  }
]


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: '30',
  appendDots: dots => (
    <div
      style={{
        backgroundColor: "transparent",
        padding: "10px"
      }}
    >
      <ul>{dots}</ul>
    </div>
  ),
  customPaging: i => (
    <div
      style={{
        width: "100%",
      }}
    >
    {itemsJumbotron[i].label}
    </div>
  )
};

export default function HomeJumbotron(){

 return(
    <S.HomeJumbotronContainer>
      <Slider {...settings}>
        {itemsJumbotron.map((item) => (
          <S.HomeJumbotron img={item.jumbotron}>
            <Container>
              <S.Description>{item.description}</S.Description>
              <S.HomeJumboTitle>{item.title}</S.HomeJumboTitle>
            </Container>
          </S.HomeJumbotron>
        ))}
        </Slider>
    </S.HomeJumbotronContainer>
  )
}
{/* <S.HomeJumbotronNav>
  <Slider {...settings}>
    {itemsJumbotron.map((item) => (
      <li>{item.label}</li>
      ))}
  </Slider>
</S.HomeJumbotronNav> */}