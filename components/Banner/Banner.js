import React from 'react';
import Container from '../Container';
import * as S from './Banner.style';
import Editable from '../Editable'
import EditableImage from '../EditableImage'

export default function Banner({index, ...props}){

  const isPair = index % 2 === 0;
  return(
    <S.Banner isPair={isPair}>
      <EditableImage {...props} textKey={`bannerBgImage${index}`}><S.BannerBgImage/></EditableImage>
      <Container >
        <S.BannerWrapper>
          <Editable {...props} textKey={`bannerTitle${index}`}><S.BannerTitle /></Editable>
          <Editable {...props} textKey={`bannerText${index}`}><S.BannerText /></Editable>
        </S.BannerWrapper>
        <EditableImage {...props} textKey={`bannerImage${index}`}><S.BannerImage/></EditableImage>
      </Container>
    </S.Banner>
  )
}