import Container from '../Container'
import Editable from '../Editable'
import * as S from './AboutUsQuote.style'

export default function AboutUsQuote(){

 return(
    <S.AboutUsQuote>
      <Container>
        <S.QuoteWrapper>
          <Editable value='”E se as histórias para crianças passassem a ser leitura obrigatória para os adultos? Seriam eles capazes de aprender realmente o que há tanto tempo têm andado a ensinar?”'><S.QuoteText/></Editable>
          <Editable value='José Saramago, escritor português, 1922-2010'><S.Credit/></Editable>
        </S.QuoteWrapper>
      </Container>
    </S.AboutUsQuote>
  )
}