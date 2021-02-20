import styled from 'styled-components';
import LastestImage from '../../images/HomeLatestArticlesImg.png'


export const HomeLatestArticles = styled.div`

  .container{
    align-items: center;

  }
`

export const LastestArticlesImage = styled.div`
  background-image: url(${LastestImage});
  width: 350px;
  height: 370px;
  position: absolute;
  right: -108px;
  top: -150px;

`
export const HomeLatestArticlesCard = styled.div`
  width: 80%;
  height: 200px;
  background: #FCBC14;
  border-radius: 50px;
  position: relative;
  padding: 20px 40px;
  >h1{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    color: #FFFFFF;

  }
`
export const LastestRegister = styled.div`
  width: 78%;
  align-items: center;
  display: flex;
  >input{
    margin-right: 20px;
    border-bottom: none;
    background: rgba(255, 255, 255, 0.216729);
    border-radius: 29.5px;
    font-family: Montserrat;
    font-weight: 500;
    padding: 15px 20px;
    font-size: 16px;
    color: #FFFCF8;

    &::placeholder {
    font-family: Montserrat;
    font-weight: 500;
    font-size: 16px;
    color: #FFFCF8;
    }
  }
  >button{
    width: 140px;
    height: 50px;
    border-radius: 50px;
    border: none;
    background-color: #FFFFFF;  
    font-family: Montserrat;
    font-weight: 500;
    font-size: 16px;
    padding: 12px 30px;
    color: #2D2E2E;
    text-transform: unset;

  }
`