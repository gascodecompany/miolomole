import { useRouter } from 'next/router'
import * as S from './OurProductsList.style'
import Container from '../Container'
import Editable from '../Editable'
import { useAppProvider } from '../../store/appProvider';

export default function OurProductsList(props){
  const router = useRouter();
  const { isLoggedIn } = useAppProvider()
  const books = props.books ? JSON.parse(props.books) : [];
  return(
    <S.OurProductsList>
      <Container>
        <S.OurProductsApresentation>
          <Editable {...props} textKey="ourProductsTitle"><S.OurProductsTitle/></Editable>
          <Editable {...props} textKey="ourProductsText"><S.OurProductsText/></Editable>
          { isLoggedIn && <S.AddBookButton onClick={() => router.push('/livros/novo')}>Cadastrar<span>+</span></S.AddBookButton> }
        </S.OurProductsApresentation>
        <S.ProductCards>
          {books && books.map((book) => (
            <S.ProductCard key={book._id} onClick={() => router.push(`/livros/${book._id}`)}>
              <S.ProductCardImage img={book.images[0]}/>
              <S.ProductCardTitle>{book.title}</S.ProductCardTitle>
            </S.ProductCard>
          ))}
        </S.ProductCards>
      </Container>
    </S.OurProductsList>
  )
}