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

export const BookInfoItemSelect = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  height: 100%;
  align-items: center;
  text-align: center;
  ${({isLoggedIn}) => !isLoggedIn && css`:focus-visible { outline: none }`}
  @media screen {
    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: baseline;
      text-align: left;
    }
  }
  > div { 
    width: 100%; 
    padding-top: 0;
    .inputSelect__control {
      padding: 0;
      border: none;
      min-height: 40px;
      box-shadow: 0 0 0 0 #000000 !important;
      border: 1px solid ${({ theme: { color: { blackDark }}}) => blackDark};
      border-radius: 8px;
    }
  
    .inputSelect__option--is-selected  {
      background: ${({ theme: { color: { brandLight }}}) => brandLight};
    }
  
    .inputSelect__option--is-focused {
      background: ${({ theme: { color: { brand }}}) => brand};
      color: ${({ theme: { color: { white }}}) => white};
    }
    .inputSelect__control {
      background: unset;
    }
    .inputSelect__multi-value {
      background-color: hsl(0, 0%, 90%);
      
      .inputSelect__multi-value__label { background-color: hsl(0, 0%, 90%) }

      .inputSelect__multi-value__remove {
        background-color: unset;
        cursor: pointer;
      }
    }
  }
`

{/* <div class="inputSelect__menu css-26l3qy-menu">
  <div class="inputSelect__menu-list inputSelect__menu-list--is-multi css-4ljt47-MenuList">
    <div class="inputSelect__option inputSelect__option--is-focused css-1n7v3ny-option" id="react-select-2-option-0" tabindex="-1">editor</div>
    <div class="inputSelect__option css-yt9ioa-option" id="react-select-2-option-1" tabindex="-1">suino</div>
    <div class="inputSelect__option css-yt9ioa-option" id="react-select-2-option-2" tabindex="-1">tiago</div>
    <div class="inputSelect__option css-yt9ioa-option" id="react-select-2-option-3" tabindex="-1">luana</div>
    <div class="inputSelect__option css-yt9ioa-option" id="react-select-2-option-4" tabindex="-1">Pedro</div>
  </div>
</div> */}

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

  #save {
    width: 100%
  }

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
  width: 100%;
  height: 100%;

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

export const PriceLabel = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  align-self: center;
  height: auto;
  @media (min-width: 1024px){ text-align: left; width: unset }
`

export const PriceText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
  margin: 2px;

  @media (min-width: 1024px){
    flex-direction: row;
  }
`