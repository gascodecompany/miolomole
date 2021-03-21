import Container from '../Container'
import Editable from '../Editable'
import * as S from './AboutUsSectionOne.style'

export default function AboutUsSectionOne(){

 return(
    <S.AboutUsSectionOne>
      <Container>
        <S.SectionOneImages/>
        <Editable text='Entendemos que a boa literatura extrapola os limites de idade, gênero, classe social e nacionalidade. A poética da infância pode ser simples e ao mesmo tempo complexa, pois é composta de camadas que propiciam uma miríade de descobertas conforme aumenta a capacidade de abstração e universo simbólico do leitor. Os livros da Miolo Mole são para todas as pessoas. Vislumbramos a experiência leitora além dos signos, valorizamos as narrativas e seus múltiplos desdobramentos.'><S.SectionOneText/></Editable>
      </Container>
    </S.AboutUsSectionOne>
  )
}