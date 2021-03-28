import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import { forwardRef } from 'react'

export const AboutUsSectionOne = styled.div`
  overflow-y: hidden;
  .container{
    padding-top: 100px;
    /* flex-direction: row;
    justify-content: center; */
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 20px;
    @media screen{
      @media (min-width: 768px){

        grid-template-columns: 40% 60%;
      }
    }
  }
`;

export const SectionOneImages = styled.div`
  height: 100%;
  width: 100%;
  background: #C4C4C4;
  border-radius: 8px;
  display: block;
  margin-right: 30px;
  
  position: relative;

`

export const SectionOneText = styled.p`
  font-family: Montserrat;
  font-weight: 500;
  font-size: ${({ theme: { fontSize: { fontSizeSM }}}) => fontSizeSM };
  line-height: 30px;
  color: #071825;
  width: 100%;
`
export const SectionOneImageOne = styled.img`
  /* min-width: 503px; */
  min-height: 364px;
  height: 100%;
  width: 100%;
  background: #C4C4C4;
  border-radius: 8px;
  display: block;
  margin-right: 30px;
`
export const SectionOneImageTwo = styled.img`
  position: absolute;
  width: 170px;
  height: 184px;
  background: #531E1E;
  border-radius: 8px;
  top: -520px;
  left: -42px;
  display: none;
  @media screen{
    @media (min-width: 1024px){
      display: block;
    }
  }
`