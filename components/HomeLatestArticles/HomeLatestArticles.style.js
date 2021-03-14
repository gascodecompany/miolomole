import styled from 'styled-components';
import mailbox from '../../images/mailbox.png'
import dots from '../../images/dots.png'


export const HomeLatestArticles = styled.div`
  overflow-x: hidden;
  .container{
    align-items: center;
    margin-top: 140px;
  }
`

export const DotsBackGround = styled.div`
  background-image: url(${dots});
  border-radius: 50px;
  width: 250px;
  height: 200px;
  position: absolute;
  right: 0px;
  top: 5px;
  overflow: hidden;
`

export const LastestArticlesImage = styled.div`
  background-image: url(${mailbox});
  width: 440px;
  height: 370px;
  position: absolute;
  right: -208px;
  top: -150px;
`

export const HomeLatestArticlesCard = styled.div`
  width: 80%;
  height: 200px;
  background: #FCBC14;
  border-radius: 50px;
  position: relative;
  padding: 20px 50px;
  >h1{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    color: #FFFFFF;
    margin-bottom: 34px
  }
`
export const LastestRegister = styled.div`
  width: 70%;
  align-items: center;
  display: flex;
  >input{
    border-bottom: none;
    background: rgba(255, 255, 255, 0.28);
    border-top-left-radius: 29.5px;
    border-bottom-left-radius: 29.5px;
    font-family: Montserrat;
    font-weight: 500;
    padding: 15.5px 20px;
    font-size: ${({ theme: { fontSize: { fontSizeXS }}}) => fontSizeXS };
    color: #FFFCF8;

    &::placeholder {
      font-family: Montserrat;
      font-weight: 500;
      font-size: ${({ theme: { fontSize: { fontSizeXS }}}) => fontSizeXS };
      color: #FFFCF8;
    }
  }
  
  >button{
    width: 140px;
    height: 50px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 29.5px;
    border-bottom-right-radius: 29.5px;
    border: none;
    background-color: #FFFFFF;
    font-family: Montserrat;
    font-weight: 500;
    font-size: ${({ theme: { fontSize: { fontSizeXS }}}) => fontSizeXS };
    padding: 12px 30px;
    color: #2D2E2E;
    text-transform: unset;
    :hover{
      transition: .2s ease-in-out;
      background-color: #E5F0FF;
    }
  }
`