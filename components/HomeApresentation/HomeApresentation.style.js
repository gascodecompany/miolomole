import styled, { css } from 'styled-components';
import homeApresentationImg from '../../images/homeApresentationImg.jpg'
import TextareaAutosize from 'react-textarea-autosize';
import { forwardRef } from 'react'

export const HomeApresentation = styled.div`
  
  .container{  
    flex-direction: column;
    @media screen{
      @media (min-width: 600px){

        flex-direction: row;
      }
    }
  }
`

export const HomeApresentationImage = styled.img`
  ${(({edit}) => edit && css`
    opacity: .4;
  `)}

  ${(({isDragActive}) => isDragActive && css`
    opacity: .2;
  `)}
  /* background-image: url(${homeApresentationImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 80vw;
  height: 90vw;

  @media screen{
    @media (min-width: 600px){
      width: 300px;
      height: 280px;
    }
    @media (min-width: 1024px){
      width: 420px;
      height: 400px;
    }
  } */
`

export const HomeInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 600px;
`
export const HomeApresentationTitle = styled.h2`
  font-family: Amatic SC;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 55px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 2.4px;
  width: 100%;
  margin-bottom: 30px;
  color: #000000;
  border: none;
  margin: 0;
  padding: 0;
  background-color: ${({edit}) => edit ? '#dcccaa33' : 'transparent'};
  white-space: break-spaces;
  resize: none;
`
export const HomeApresentationText = styled.p`
  font-family: Montserrat;
  font-weight: 500;
  font-size: ${({ theme: { fontSize: { fontSizeSM }}}) => fontSizeSM };
  background-color: ${({edit}) => edit ? '#dcccaa33' : 'transparent'};
  line-height: 28px;
  color: #000000;
  width: 100%;
  white-space: break-spaces;
  border: none;
  margin: 0;
  padding: 0;
  resize: none;
`