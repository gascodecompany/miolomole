import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import { forwardRef } from 'react'

export const AboutUsOurHistory = styled.div`
  margin-bottom: 0px;

  .container{
    align-items: end;

    @media screen{
      @media (min-width: 1024px){
        margin-bottom: 90px;
        padding: 0;
      }
    }
  }
`;

export const OurHistoryWrapper = styled.div`
  background: #333333;
  /* margin: 0 auto; */
  padding: 50px;
  margin-top: -180px;
  position: relative;
  width: 100%;

  @media screen{
    @media (min-width: 1024px){

      width: 84%;
    }
  }
`

export const OurHistoryTitle = styled.h2`
  font-family: Amatic SC;
  font-weight: bold;
  letter-spacing: 2.4px;
  color: #00A79D;
  margin-bottom: 20px;
  font-size: 35px;
  width: 100%;

  @media screen{
    @media (min-width: 1024px){
      width: 80%;
      font-size: 75px;
    }
  }
`

export const OurHistoryText = styled.p`
  font-family: Montserrat;
  font-weight: 500;
  color: #FFFFFF;
  width: 100%;
  font-size: 14px;
  line-height: 26px;

  @media screen{
    @media (min-width: 1024px){
      width: 80%;
      font-size: ${({ theme: { fontSize: { fontSizeSM }}}) => fontSizeSM };
      line-height: 30px;

    }
  }

`
export const AboutUsOurHistoryImage = styled.img`
  position: initial;
  width: 100%;

  @media screen{
    @media (min-width: 1024px){
      max-width: 325px;
      max-height: 475px;
      position: absolute;
      right: -160px;
      bottom: -90px;
    }
  }
`