import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Container from '../Container';
import "slick-carousel/slick/slick.css"; 
import * as S from './SpotlightBooksJumbotron.style';
import "slick-carousel/slick/slick-theme.css";

const settings = (items) => ({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  arrows: false,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: '30',
  appendDots: (dots) => (
    <div style={{ backgroundColor: "transparent", padding: "10px" }}>
      <ul>{dots}</ul>
    </div>
  ),
  customPaging: (i) => {
    //  capture domain color from remote image
    return (
      <S.JumbotronSliderTitle key={items[i].title}>
        {items[i].title}
      </S.JumbotronSliderTitle>
    )
  }
});

export default function HomeJumbotron(props){
  const [books, setBooks] = useState([]);

  useEffect(() => props.books && setBooks(JSON.parse(props.books)), [props])

  return(
    <S.HomeJumbotronContainer>
      <Slider {...settings(books)}>
        {books.map(({spotlight}) => {
          return (
            <S.HomeJumbotron img={spotlight.image} key={spotlight.image + "Jumbotron"}>
              <Container>
                <S.Description>{spotlight.description}</S.Description>
                <S.HomeJumboTitle>{spotlight.title}</S.HomeJumboTitle>
              </Container>
            </S.HomeJumbotron>
          )}
        )}
        </Slider>
    </S.HomeJumbotronContainer>
  )
}
