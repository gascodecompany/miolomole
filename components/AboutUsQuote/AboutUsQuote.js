import Container from '../Container'
import Editable from '../Editable'
import * as S from './AboutUsQuote.style'

export default function AboutUsQuote(props){

 return(
    <S.AboutUsQuote>
      <Container>
        <S.QuoteWrapper>
          <Editable {...props} textKey='aboutUsQuoteText'><S.QuoteText /></Editable>
          <Editable {...props} textKey='aboutUsQuoteAuthor'><S.Credit /></Editable>
        </S.QuoteWrapper>
      </Container>
    </S.AboutUsQuote>
  )
}