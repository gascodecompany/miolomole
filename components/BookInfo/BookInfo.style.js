import styled, { css } from 'styled-components';

export const BookInfo = styled.div`
  width: 90%;
  @media screen{ 
    @media (min-width: 1024px){ width: 60% }
  }

  button{
    padding: 5px;
    font-family: Montserrat;
    font-weight: bold;
    font-size: ${({ theme: { fontSize: { fontSizeS }}}) => fontSizeS };
    letter-spacing: 2.4px;
    color: #FFFFFF;
    width: 100%;
    background: ${({ theme: { color: { brand }}}) => brand };
    border-radius: 100px;
    border: none;
    color: white;
    box-shadow: 3px 3px 2px rgb(115 137 169 / 20%);
    transition: background 0.3s; 

    :hover{
      background: ${({ theme: { color: { brandDarkGreen }}}) => brandDarkGreen };
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
    @media (min-width: 1024px){ font-size: 40px }
  }
  ${({isLoggedIn}) => !isLoggedIn && css`:focus-visible { outline: none }`}
`
export const BookInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: 10px;
  @media screen{
    @media (min-width: 1024px){
      flex-direction: row;
      align-items: center;
    }
  }
  ${({isLoggedIn}) => !isLoggedIn && css`:focus-visible { outline: none }`}
`

export const BookItemLabel = styled.label`
  width: 250px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #071825;
  ${({isLoggedIn}) => !isLoggedIn && css`:focus-visible { outline: none }`}
`

export const BookItemValue = styled.p`
  width: 100%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #071825;
  padding: 7px;
  border-radius: 5px;
  overflow: hidden;
  ${({isLoggedIn}) => isLoggedIn ? css`:focus-visible { background-color: ${({ theme: { color: { brandVeryLighter }}}) => brandVeryLighter } }` : css `:focus-visible { outline: none }`}
`

export const Message = styled.div`
  
`