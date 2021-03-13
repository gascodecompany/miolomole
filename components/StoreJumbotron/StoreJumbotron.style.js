import styled from 'styled-components';
import StoreJumbotron from '../../images/jumbotronLoja.jpg'

export const StoreJumbotronContainer = styled.div`
  background-image: url(${StoreJumbotron});
  width: 100vw;
  max-height: 714px;
  background-repeat: no-repeat;
  background-size: cover;
  height: 80vh;
  background-position: right;
  @media screen{
    @media (min-width: 1024px){
      height: 54vw;
      background-position: center;
    }
  }
  .container{
    align-items: flex-start;

  }
`
export const JumbotronWraper = styled.div`
  width: 100%;
  height: 70%;

  .inputSelect__control{
    background-color: transparent;
  }
  .inputSelect__placeholder{
    color: white;
    font-family: Lato;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.4;
    color: #FFFFFF;
  }
  .primary{
    width: 150px;
    border: none;
    font-family: 'Open Sans';
    font-weight: bold;
    font-size: 18px;
    line-height: 1.3;
    color: #FFFFFF;
  }
`
export const StoreJumbotronTitle = styled.div`
  font-family: Amatic SC;
  font-style: normal;
  font-weight: 500;
  font-size: 80px;
  /* identical to box height */
  margin-bottom: 30px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 2.4px;
  color: #FFFFFF;
  font-size: 50px;
  line-height: 1.5;
  @media screen{
    @media (min-width: 1024px){
      font-size: 80px;
    }
  }
`
export const StoreJumbotronSubTitle = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: #FFFFFF;
  margin-bottom: 30px;
  font-size: 15px;
  line-height: 1.6;
  width: 90%;
  @media screen{
    @media (min-width: 1024px){
      font-size: 20px;
      width: 480px;
    }
  }
`