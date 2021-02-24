import * as S from './BooksJumbotron.style';
import homeJumbotron from '../../images/icons/bg-home.jpg';
import homeJumbotron2 from '../../images/jumbotronQuem.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Container from '../Container';

const itemsBooksJumbotron = [
  {
    name: 'kingCrown',
    label: 'Rei coroa',
    title: 'Lorem Ipsum Lorem Ipsum',
    jumbotron: homeJumbotron,
  },
  {
    name: 'kingCrown2',
    label: 'Coroa 2',
    title: 'Ipson Lorem Ipsum Lorem Ipsum',
    jumbotron: homeJumbotron2,
  }
]


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
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
    {itemsBooksJumbotron[i].label}
    </div>
  )
};

export default function HomeJumbotron(){

 return(
    <S.BooksJumbotronContainer>
      <Slider {...settings}>
        {itemsBooksJumbotron.map((item) => (
          <S.BooksJumbotron img={item.jumbotron}>
            <Container>
              <S.BooksJumboTitle>{item.title}</S.BooksJumboTitle>
            </Container>
          </S.BooksJumbotron>
        ))}
        </Slider>
    </S.BooksJumbotronContainer>
  )
}