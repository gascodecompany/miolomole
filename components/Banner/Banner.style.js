import styled from 'styled-components';
import bgBanner from '../../images/banners/bg_banner.png'
import templateCover from '../../images/banners/template_cover.png'

export const Banner = styled.div`
  /* background-image: url(${bgBanner}); */
  /* background-size: cover; */
  width: 100vw;
  height: auto;

  /* padding: 40px; */
  .container{
    align-items: center;
    height: auto;
    justify-content: space-between;
    flex-direction: ${({isPair}) => {
      return isPair ? 'column' : 'column-reverse'}};

    @media screen{
      @media (min-width: 800px){
        height: 400px;
        flex-direction: ${({isPair}) => {
          return isPair ? 'row' : 'row-reverse'}};
      }
    }
  }
`
export const BannerBgImage = styled.img`
  width: 100%;
  object-fit: cover;
  position: absolute;
  height: fit-content;
  max-height: 400px;

  @media screen{
    @media (min-width: 800px){
      height: 400px;
      
    }
  }
`
export const BannerWrapper = styled.div`
  margin: 0 50px;
  z-index: 1;
  width: 100%;
  @media screen{
    @media(min-width: 800px){
      width: 55%;
    }
  }

`
export const BannerTitle = styled.h1`
  margin: 0px;
  font-size: 31px;

  @media screen{
    @media (min-width: 800px){
      font-size: 50px;
    }
  }
`

export const BannerText = styled.p`
  line-height: 1.5;
  font-size: 14px;

  @media screen{
    @media (min-width: 800px){
      font-size: 18px;

    }
  }
`

export const BannerImage = styled.img`
  /* background-image: url(${templateCover}); */
  /* background-color: red; */
  width: 100%;
  object-fit: contain;
  background-size: contain;
  z-index: 1;
  height: 172px;
  margin: 0;


  @media screen{
    @media (min-width: 800px){
      height: 360px;
      width: auto;

    }
  }
`