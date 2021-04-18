import styled from 'styled-components';
import bgBanner from '../../images/banners/bg_banner.png'
import templateCover from '../../images/banners/template_cover.png'

export const Banner = styled.div`
  /* background-image: url(${bgBanner}); */
  /* background-size: cover; */
  width: 100vw;
  height: 400px;
  /* padding: 40px; */
  .container{
    flex-direction: ${({isPair}) => {
      return isPair ? 'row' : 'row-reverse'}};
    align-items: center;
    justify-content: space-between;

  }
`
export const BannerBgImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  position: absolute;
`
export const BannerWrapper = styled.div`
  margin: 0 50px;
  z-index: 1;
  width: 45%;
`
export const BannerTitle = styled.h1`
  font-size: 50px;
  margin: 0px;
`

export const BannerText = styled.p`
  font-size: 18px;
  line-height: 1.5;
  /* width:   60%; */
`

export const BannerImage = styled.img`
  /* background-image: url(${templateCover}); */
  /* background-color: red; */
  width: 100%;
  object-fit: contain;
  height: 360px;
  margin: 0 30px;
  background-size: contain;
  z-index: 1;
`