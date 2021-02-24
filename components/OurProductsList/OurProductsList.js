import * as S from './OurProductsList.style'
import { Books } from '../../Constants/Books'
import Container from '../Container'


export default function OurProductsList(){

 return(
    <S.OurProductsList>
      <Container>
        <S.OurProductsTitle>Nossos Produtos</S.OurProductsTitle>
        <S.OurProductsText>Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum </S.OurProductsText>
        <S.ProductCards>
          {Books.map((book) => (
            <S.ProductCard>
              <S.ProductCardImage img={book.cover}/>
              <S.ProductCardTitle>{book.title}</S.ProductCardTitle>
              <S.ProductCardPrice>{book.price}</S.ProductCardPrice>
            </S.ProductCard>
          ))}
        </S.ProductCards>
      </Container>
    </S.OurProductsList>
  )
}