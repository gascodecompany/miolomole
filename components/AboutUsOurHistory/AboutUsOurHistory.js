import { useEffect, useState } from 'react'
import * as S from './AboutUsOurHistory.style'
import Container from '../Container'
import Editable from '../Editable'

export default function AboutUsOurHistory(){
  
 return(
    <S.AboutUsOurHistory>
      <Container>
      <S.OurHistoryWrapper>
        <Editable value='A história de quem somos' ><S.OurHistoryTitle/></Editable>
        <Editable value='Miolo Mole nasceu em 2010 como um projeto de mediação de leitura. Entre 2010 e 2013 foram realizadas oficinas de curta e média duração, com crianças e pré-adolescentes, em locais de alta vulnerabilidade social, livrarias e espaços culturais diversos na cidade de São Paulo.\nEssa vivência trouxe à editora e idealizadora do projeto, Luana Vignon, um amplo repertório de narrativas e experiências de leitura.\n\nO desejo de publicar obras que valorizassem a diversidade e a pluralidade cultural, preservando a poética da infância, foi o estímulo para a criação do selo literário Miolo Mole. No ano de 2019 uniram-se a essa ideia o editor Marco Saliba e o designer gráfico Daniel Rosa, ocasião em que a editora passou a integrar o Grupo Eureka. Neste ano foram iniciados os primeiros projetos com autores e ilustradores convidados.' ><S.OurHistoryText/></Editable>
        <span className='grayBox'></span>
      </S.OurHistoryWrapper>
      </Container>
    </S.AboutUsOurHistory>
  )
}