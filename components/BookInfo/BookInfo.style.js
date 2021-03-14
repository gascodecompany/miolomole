import styled from 'styled-components';

export const BookInfo = styled.div`
  width: 90%;
  @media screen{
    @media (min-width: 1024px){
      width: 60%;
    }
  }

`
export const BookInfoTitle = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  line-height: 1.5;
  display: flex;
  align-items: center;
  color: #333333;
  font-size: 22px;
  @media screen{
    @media (min-width: 1024px){
      font-size: 22px;
    }
  }

`
export const BookInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;

  >b{
    width: 200px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.4;
    color: #071825;
  } 
  p{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.4;
    color: #071825;
  }
  @media screen{
    @media (min-width: 1024px){
      flex-direction: row;
      align-items: center;
    }
  }
`