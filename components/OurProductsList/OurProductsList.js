import { useRouter } from 'next/router'
import * as S from './OurProductsList.style'
import { Books } from '../../Constants/Books'
import Container from '../Container'
import Editable from '../Editable'

export default function OurProductsList(props){
    const router = useRouter();
 return(
    <S.OurProductsList>
      <Container>
        <S.OurProductsApresentation>
          <Editable {...props} textKey="ourProductsTitle"><S.OurProductsTitle/></Editable>
          <Editable {...props} textKey="ourProductsText"><S.OurProductsText/></Editable>
          <S.AddBookButton onClick={() => router.push('/livros/novo')}>Cadastrar<span>+</span></S.AddBookButton>
        </S.OurProductsApresentation>
        <S.ProductCards>
          {Books.map((book) => (
            <S.ProductCard key={book._id} onClick={() => router.push(`/livros/${book._id}`)}>
              <S.ProductCardImage img={book.cover}/>
              <S.ProductCardTitle>{book.title}</S.ProductCardTitle>
              {/* <S.ProductCardPrice>{book.price}</S.ProductCardPrice> */}
            </S.ProductCard>
          ))}
        </S.ProductCards>
      </Container>
    </S.OurProductsList>
  )
}