import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import { forwardRef } from 'react'

export const AboutUsOurHistory = styled.div`
    margin-bottom: 90px;

  .container{
    align-items: end;

    @media screen{
      @media (min-width: 1024px){
        padding: 0;
      }
    }

    .grayBox{
      width: 325px;
      height: 475px;
      background: #D8D8D8;
      position: absolute;
      right: -160px;
      bottom: -90px;
    }
  }
`;

export const OurHistoryWrapper = styled.div`
  background: #333333;
  width: 84%;
  /* margin: 0 auto; */
  padding: 50px;
  margin-top: -180px;
  position: relative;


`

export const OurHistoryTitle = styled.h2`
  font-family: Amatic SC;
  font-weight: bold;
  font-size: 75px;
  letter-spacing: 2.4px;
  color: #00A79D;
  width: 80%;
  margin-bottom: 20px;
`

export const OurHistoryText = styled.p`
  font-family: Montserrat;
  font-weight: 500;
  font-size: ${({ theme: { fontSize: { fontSizeSM }}}) => fontSizeSM };
  line-height: 30px;
  color: #FFFFFF;
  width: 80%;

`
export const AboutUsOurHistoryImage = styled.img`
  max-width: 325px;
  max-height: 475px;
  position: absolute;
  right: -160px;
  bottom: -90px;
`