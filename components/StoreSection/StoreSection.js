import * as S from './StoreSection.style'
import Container from '../Container';
import lojaOneBg from '../../images/lojaImgOne.jpg' 
import lojaTwoBg from '../../images/lojaImgTwo.jpg' 
import partnerOneLogo from '../../images/partnerOneLogo.png' 
import parser from 'html-react-parser'

const partnersItems = [
  {
    name: 'Parceiro1',
    logo: partnerOneLogo,
    background: lojaOneBg,
    text: 'Somente vendas on-line<br></br> https://www.artshop.net.br/'
  },
  {
    name: 'Parceiro2',
    logo: partnerOneLogo,
    background: lojaTwoBg,
    text: 'Somente vendas on-line<br></br> https://www.artshop.net.br/'
  }
]

export default function StoreSection(){
  
 return(
    <S.StoreSectionContainer>
      <Container>
        <S.StoreTitle>Parceiros</S.StoreTitle>
        <S.StoreApresentation>Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum </S.StoreApresentation>
        <S.StorePartners>
          {partnersItems.map((item) => (
          <S.PartnerCard img={item.background}>
            <S.PartnerLogo img={item.logo}/>
            <S.PartnerText>{parser(item.text)}</S.PartnerText>
          </S.PartnerCard>
          ))}
        </S.StorePartners>
      </Container>
    </S.StoreSectionContainer>
  )
}