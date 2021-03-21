import Container from '../Container'
import Editable from '../Editable'
import * as S from './AboutUsImagination.style'

export default function AboutUsImagination(){

 return(
    <S.AboutUsImagination>
      <Container>
        <Editable value='Um Incentivo à imaginação'><S.ImagitationTitle/></Editable>
        <S.ImaginationWrapper>
          <Editable value='A leitura tem seu ponto de partida no objeto livro, que no caso da literatura infantil, principalmente, se apresenta sob uma gama de variedades quanto à forma de narrativa que transmite – poesia, contos, memórias, imagens; quanto aos temas que aborda – família, fábulas, emoções, lugares e ainda quanto ao formato e textura – grande, pequeno, quadrado, inclinado, macio, com relevos. Independentemente dos critérios escolhidos, os bons livros tratam de temas universais que revelam, durante a leitura, repertórios, vivências, experiências, lembranças e emoções que atingem cada leitor de maneira única e diferenciada.'><S.ImaginationTextOne/></Editable>
          <S.ImaginationImgOne/>
          <S.ImaginationImgTwo/>
          <Editable value='A leitura tem seu ponto de partida no objeto livro, que no caso da literatura infantil, principalmente, se apresenta sob uma gama de variedades quanto à forma de narrativa que transmite – poesia, contos, memórias, imagens; quanto aos temas que aborda – família, fábulas, emoções, lugares e ainda quanto ao formato e textura – grande, pequeno, quadrado, inclinado, macio, com relevos. Independentemente dos critérios escolhidos, os bons livros tratam de temas universais que revelam, durante a leitura, repertórios, vivências, experiências, lembranças e emoções que atingem cada leitor de maneira única e diferenciada.'><S.ImaginationTextTwo/></Editable>
        </S.ImaginationWrapper>
      </Container>
    </S.AboutUsImagination>
  )
}