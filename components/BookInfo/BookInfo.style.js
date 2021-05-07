import styled, { css } from 'styled-components';

export const BookInfo = styled.div`
  width: 90%;
  @media screen{ 
    @media (min-width: 1024px){ width: 60% }
  }

  button{ grid-area: button; }
`
export const BookInfoTitle = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  line-height: 1.5;
  display: flex;
  align-items: center;
  color: #333333;
  font-size: 32px;
  text-align: center;
  width: 100%;
  margin: 15px 0;
  @media (min-width: 1024px){ font-size: 40px; text-align: left; }
  ${({isLoggedIn}) => !isLoggedIn && css`:focus-visible { outline: none }`}
`
export const BookInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  height: 100%;
  align-items: center;
  ${({isLoggedIn}) => !isLoggedIn && css`:focus-visible { outline: none }`}
  @media screen {
    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: baseline;
    }
  }
`

export const BookItemLabel = styled.label`
  width: 100%;
  height: auto;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #071825;
  text-align: center;
  ${({isLoggedIn}) => !isLoggedIn && css`:focus-visible { outline: none }`}
  @media (min-width: 1024px){
    width: 200px;
    text-align: left;
  }
`

export const BookItemValue = styled.p`
  width: 100%;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 14px;
  color: #071825;
  padding: 7px;
  border-radius: 5px;
  text-align: center;
  ${({isLoggedIn}) => isLoggedIn ? css`:focus-visible { background-color: ${({ theme: { color: { brandVeryLighter }}}) => brandVeryLighter } }` : css `:focus-visible { outline: none }`}
  @media (min-width: 1024px){
    text-align: left;
    width: 100%;
  }
`

export const BottomWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px){
    display: grid;
    text-align: left;
    grid-template-columns: 1fr 3fr;
    grid-template-areas: "price button";
  }
`

export const Price = styled.div`
  grid-area: price;
  margin: 0;
  width: 150px;

  @media (min-width: 1024px){
    margin: 0 20px;
  }
`

export const Label = styled.label`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-align: left;
  color: ${({ theme: { color: { blackMedium }}}) => blackMedium };
  margin-bottom: 15px;
`

export const PriceValue = styled.p`
  ${({isLoggedIn}) => !isLoggedIn && css`:focus-visible { outline: none }`}
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  width: 100%;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  @media (min-width: 1024px){ text-align: left }
`

export const PriceText = styled.p`
  display: flex;
  align-items: center;
  margin: 2px;
`