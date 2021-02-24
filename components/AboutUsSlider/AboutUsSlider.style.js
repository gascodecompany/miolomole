import styled from 'styled-components';
import pt from '../../i18n/pt';
const t = pt;

export const AboutUsSlider = styled.div`
  background: #F6F6FA;
  width: 100vw;
  display: flex;
  flex-direction: column;
  height: auto;
  position: relative;
  margin-bottom: 30px;

  @media screen{
    @media (min-width: 1024px){
      height: 300px;
      overflow: hidden;

      &::before{
        content: '';
        display: block;
        position: absolute;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 40%;
        background: #F6F6FA;
        z-index: 1;
        min-width: 394px;

      }
    }
  }
  .slick-slide{
    padding: 0 10px;
    height: 300px;
    @media screen{
      @media (min-width: 1024px){
        height: 300px;

      }
    }
  }
  .slick-track{
    left: 0px;

    @media screen{
      @media (min-width: 1024px){
        left: -200px;

      }
    }
  }
  .slick-list{
    padding:0 20% 0 0;
    @media screen{
      @media (min-width: 1024px){
        overflow: visible;

      }
    }
  }

  .slick-dots{
    bottom: -10px;
    z-index: 3;
    width: 49%;
    left: 24vw;

    @media screen{
      @media (min-width: 1024px){
        top: 229px;
        left: -318px;
        width: 40%;

      }
    }

    li{
      width: 12px;
      height: 3px;
      border-radius: 5px;
      background-color: #B8B8B8;
      button{
        margin-top: -8px !important;
        &::before{
          display: none;
        }
      }
      &.slick-active{
        width: 24px;
        background-color: #7DBBB8;
      }
    }
  }
  .slick-prev {
    margin-top: 0 !important;
    width: 15px;
    height: 15px;
    z-index: 10; 
    color: #7DBBB8;
    border-bottom: 3px solid #7DBBB8;
    border-left: 3px solid #7DBBB8;
    transform: rotate(45deg);
    bottom: -6px;
    top: unset;
    left: 20px;

    @media screen{
      @media (min-width: 360px){
        left: 90px;
      }
      @media(min-width: 375px){
        /* left: 79px; */
        /* top: 410PX; */

      }
      @media (min-width: 425px){
        left: 130px;
        /* top: 448px; */
      }
      @media (min-width: 600px){
        /* left: 178px; */
        /* top: 406px; */
      }
      @media (min-width: 768px){
        left: 270px;
        /* top: 421px; */
      }
      @media (min-width: 1024px){
        left: -357px;
        top: 235px;
      }
    }

    &::before{
      display: none;
    }
  }
  .slick-next {
    margin-top: 0 !important;
    z-index: 10; 
    width: 15px;
    height: 15px;
    color: #7DBBB8;
    border-bottom: 3px solid #7DBBB8;
    border-right: 3px solid #7DBBB8;
    transform: rotate(-45deg);
    bottom: -6px;
    top: unset;
    left: 40px;

    @media screen{
      @media (min-width: 360px){
        left: 100px;
      }
      @media (min-width: 375px){

      }
      @media (min-width: 425px){
        left: 140px;
        /* top: 448px; */
      }
      @media (min-width: 600px){
        /* right: 314px; */
        /* top: 406px; */
      }
      @media (min-width: 768px){
        left: 280px;
        /* top: 421px; */
      }
      @media (min-width: 1024px){
        left: -337px;
        top: 235px;
      }
    }
    &::before{
      display: none;
    }
  }
`

export const AboutUsSliderContainer = styled.div`
  background: #F6F6FA;
  display: flex;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  max-width: unset;
  width: 100vw;

  @media screen{
    @media (min-width: 1024px){
      max-width: 1024px;
      height: 270px;
      margin: auto;
      flex-direction: row;
    }
  }
  
`
export const SliderInfo = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
  height: 100%;
  width: auto;
  z-index: 2;
  @media screen{
    @media (min-width: 1024px){
      flex-direction: column;
      width: 393px;
      background: #F6F6FA;
    }
  }

`

export const SliderTitle = styled.div`
  font-family: Amatic SC;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 69px;
  margin-left: 20px;

  color: #00A79D;

  opacity: 0.9;
`

export const SliderDescription = styled.div`
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 22px;
  line-height: 1.4;
  display: flex;
  align-items: center;
  color: #000000;
  margin-left: 20px;
  margin-bottom: 40px;
`

export const SliderCards = styled.div`
  /* display: flex; */
  width: 90vw;
  margin-bottom: 70px;
  @media screen{
    @media (min-width: 1024px){
      margin-bottom: unset;

      width: 61%;
    }
  }
`

export const SliderCard = styled.div`
  /* width: 170px; */
  height: 100%;
  border-radius: 10px;
  position: relative;
  /* padding: 0 200px; */
  @media screen{
    @media (min-width: 1024px){
      height: 100%;

      padding: 50px 30px 20px 20px;
    }
  }

`
export const CardTitle = styled.div`
  font-family: Montserrat;
  font-weight: 500;
  line-height: 35px;
  color: #00A79D;
  margin-bottom: 5px;
  font-size: 16px;
  margin-left: 64px;
  @media screen{
    @media (min-width: 1024px){
      font-size: 20px;
      margin-left: 50px;

    }
  }

`
export const SliderCardContainer = styled.div`
  background-color: #FFFFFF;
  height: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  /* width: 90vw; */
  padding: 10px;

  @media (min-width: 1024px){
    height: 208px;
    margin-top: unset;
    width: 371px;
  }
`
export const CardName = styled.div`
  text-align: left;
  grid-area: cardName;
  width: max-content;
  >b{
    font-family: 'Inter';
    font-weight: 500;
    font-size: 11px;
    line-height: 1.4 !important;
    line-height: 22px;
    color: #7DBBB8;
  }
  >p{
    font-family: 'Open Sans';
    font-size: 10px;
    line-height: 1.4 !important;
    line-height: 20px;
    color: #7C7C7C;
  }

`
export const CardInfo = styled.div`
  display: flex;
`

export const CardDescription = styled.div`
  font-family: Montserrat;
  color: #071825;
  font-size: 12px;
  line-height: 19px;
  @media screen{
    @media (min-width: 1024px){
      font-size: 14px;
      line-height: 20px;
    }
  }
`

export const CarrousselButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0px;
  margin-left: 20px;
  margin-bottom: 30px;

  @media screen{
    @media (min-width: 1024px){
    margin-bottom: 0;

    }
  }

`

export const CarrousselLeftArrow = styled.div`
  width: 15px;
  height: 15px;
  cursor: pointer;
  transform: rotate(45deg);
  border-bottom: 3px solid ${({ theme: { color: { brand }}}) => brand };
  border-left: 3px solid ${({ theme: { color: { brand }}}) => brand };

  :hover{
    width: 18px;
    height: 18px;
  }
`

export const CarrousselRightArrow = styled.div`
  cursor: pointer;
  width: 15px;
  height: 15px;
  transform: rotate(45deg);
  border-top: 3px solid ${({ theme: { color: { brand }}}) => brand };
  border-right: 3px solid ${({ theme: { color: { brand }}}) => brand };
  margin-right: 20px;

  :hover{
    width: 18px;
    height: 18px;
  }
`

export const CarrousselListButtons = styled.ul`
  display: flex;
  /* margin-bottom: 60px; */

  li{
    cursor: pointer;
    width: 12px;
    height: 3px;
    margin-right: 5px;  
    background-color: ${({ theme: { color: { blackLight }}}) => blackLight };
    :first-child{
      width: 23px;
      background-color: ${({ theme: { color: { brandDark }}}) => brandDark };

    }
  }
`

export const CardLogo = styled.div`
  background-image: url(${({ src }) => src });
  width: 80px;
  background-size: cover;
  height: 40px;
  grid-area: cardLogo;
  background-repeat: no-repeat;
  margin-right: 10px;
  background-position: center;
`
export const CardPicture = styled.div`
  background-image: url(${({ src }) => src });
  position: absolute;
  width: 56px;
  height: 56px;
  border-radius: 8px;
  background-repeat: no-repeat;
  background-size: contain;
  top: 20px;
  left: 6px;

`