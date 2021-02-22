import Container from '../Container'
import * as S from './AboutUsQuote.style'

export default function AboutUsQuote(){

 return(
    <S.AboutUsQuote>
      <Container>
        <S.QuoteWrapper>
        <S.QuoteText>”E se as histórias para crianças passassem a ser leitura obrigatória para os adultos? Seriam eles capazes de aprender realmente o que há tanto tempo têm andado a ensinar?”</S.QuoteText>
        <S.Credit>José Saramago, escritor português, 1922-2010</S.Credit>
        </S.QuoteWrapper>
      </Container>
    </S.AboutUsQuote>
  )
}