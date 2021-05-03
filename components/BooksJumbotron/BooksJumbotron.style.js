import styled from 'styled-components';

export const BooksJumbotronContainer = styled.div`
  .slick-dots{
    ul{
      margin: 0px;
      list-style-type: none;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-inline-start: 0px;

      li{
        width: 170px;
        bottom: 15px;
        padding-bottom: 30px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        letter-spacing: 2.4px;
        color: #FFFFFF;
        display: flex;

        &.slick-active{
          border-bottom: 3px solid #FECA30;
        }  
      }
    }
  }
  
`
export const BooksJumbotron = styled.div`
  background-image: url(${({ img }) => img });
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  border-bottom: 3px solid #898F9B;
  background-position: center;


  .container{
    display: flex;
    align-items: flex-start;
  }
 
`
export const Description = styled.div`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 2.4px;
  line-height: 2;
  margin-bottom: 30px;
  color: #FFFFFF;
`
export const BooksJumboTitle = styled.div`
  font-family: Arvo;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  color: #FFFFFF;
  margin-left: 30px;

`
export const BooksJumbotronNav = styled.div`

`