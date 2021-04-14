import * as S from './StoreSection.style'
import Container from '../Container';
import parser from 'html-react-parser'
import { partnersItems } from './StoreSection.constants'



export default function StoreSection(){
  
 return(
    <S.StoreSectionContainer>
      <Container>
        <S.StorePartners>
          {partnersItems.map((item) => (
          <S.PartnerCard>
            <S.PartnerLogo img={item.logo}/>
            <S.PartnerText>{parser(item.text)}</S.PartnerText>
          </S.PartnerCard>
          ))}
        </S.StorePartners>
      </Container>
    </S.StoreSectionContainer>
  )
}