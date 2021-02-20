import styled from 'styled-components';
import homeApresentationImg from '../../images/homeApresentationImg.jpg'

export const HomeApresentation = styled.div`
  
  .container{
    flex-direction: row;
  }
`

export const HomeApresentationImage = styled.div`
  background-image: url(${homeApresentationImg});
  width: 420px;
  height: 400px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

`

export const HomeInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 600px;
`
export const HomeApresentationTitle = styled.div`
font-family: Amatic SC;
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 55px;
display: flex;
align-items: flex-end;
letter-spacing: 2.4px;
width: 90%;
margin-bottom: 30px;
color: #000000;
`
export const HomeApresentationText = styled.div`
font-family: Montserrat;
font-weight: 500;
font-size: 18px;
line-height: 28px;
color: #000000;
width: 90%;

`