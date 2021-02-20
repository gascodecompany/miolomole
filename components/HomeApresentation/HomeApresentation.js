import Container from '../Container'
import * as S from './HomeApresentation.style'

export default function HomeApresentation(){

 return(
   <S.HomeApresentation>
    <Container>
      <S.HomeApresentationImage/>
      <S.HomeInfo>
        <S.HomeApresentationTitle>LER É COMO SAIR DE CASA, A GENTE SEMPRE VOLTA DIFERENTE!</S.HomeApresentationTitle>
        <S.HomeApresentationText>A literatura estimula os processos cognitivos e ativa a imaginação. O “miolo” por ser “mole” é livre para receber o hábito da leitura. A mente está aberta às novas experiências e sensações!</S.HomeApresentationText>
      </S.HomeInfo>
    </Container>
   </S.HomeApresentation>
  )
}