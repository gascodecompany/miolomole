import Container from '../Container'
import Editable from '../Editable'
import * as S from './AboutUsQuote.style'

export default function AboutUsQuote({ texts }){

 return(
    <S.AboutUsQuote>
      <Container>
        <S.QuoteWrapper>
          <Editable page="aboutUs" textKey='aboutUsQuoteText'><S.QuoteText>{texts.aboutUsQuoteText}</S.QuoteText></Editable>
          <Editable page="aboutUs" textKey='aboutUsQuoteAuthor'><S.Credit>{texts.aboutUsQuoteAuthor}</S.Credit></Editable>
        </S.QuoteWrapper>
      </Container>
    </S.AboutUsQuote>
  )
}