import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';

const primary = css`
  justify-self: center;
  padding: 5px;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 2px;
  color: #FFFFFF;
  width: auto;
  min-width: 200px;
  height: 50px;
  background: ${({ theme: { color: { brand }}}) => brand };
  border-radius: 12px;
  border: none;
  color: white;
  box-shadow: 3px 3px 2px rgb(115 137 169 / 20%);
  transition: all 0.3s; 

  svg {
    path {
      stroke: ${({ theme: { color: { white }}}) => white };
    }
  }

  &:hover {
    background: ${({theme: {color: { brand }}}) => darken('.05', brand) };
  }

  &:active, &:focus {
    background: ${({theme: {color: { brand }}}) => darken('.1', brand) };
  }
`

const inverse = css`
  background: transparent ;
  color: ${({ theme: { color: { white }}}) => white };

  svg {
    path {
      stroke: ${({ theme: { color: { white }}}) => white };
    }
  }

  &:hover {
    background: ${({theme: {color: { white }}}) => white };
    color: ${({ theme: { color: { brandDark }}}) => brandDark };
  }

  &:active, &:focus {
    background: ${({theme: {color: { brandDark }}}) => lighten('.5', brandDark) };
    color: ${({ theme: { color: { brandDark }}}) => brandDark };
  }
  
`

const primaryDark = css`
  background: ${({ theme: { color: { brandDarkGreen }}}) => brandDarkGreen };
  color: ${({ theme: { color: { white }}}) => white };

  svg {
    path {
      stroke: ${({ theme: { color: { white }}}) => white };
    }
  }

  &:hover {
    background: ${({theme: {color: { brandDarkGreen }}}) => darken('.05', brandDarkGreen) };
  }

  &:active, &:focus {
    background: ${({theme: {color: { brandDarkGreen }}}) => darken('.1', brandDarkGreen) };
  }
  
`

const secondary = css`
  background: ${({ theme: { color: { white }}}) => white };
  color: ${({ theme: { color: { brandDark }}}) => brandDark };
  height: 50px;
  border-radius: 29.5px;
  &:hover {
    background: ${({theme: {color: { brandDark }}}) => brandDark };
    color: ${({ theme: { color: { white }}}) => white };
  }

  &:active, &:focus {
    background: ${({ theme: { color: { brandSmoth }}}) => brandSmoth };
    color: white;
  }
`

const danger = css`
  background: ${({ theme: { color: { danger }}}) => danger };
  color: ${({ theme: { color: { white }}}) => white };

  &:hover {
    background: ${({theme: {color: { danger }}}) => darken('.05', danger) };
  }

  &:active, &:focus {
    background: ${({theme: {color: { danger }}}) => darken('.1', danger) };
  }

  svg {
    path {
      stroke: ${({ theme: { color: { white }}}) => white };
    }
  }
`

const dark = css`
  background: ${({ theme: { color: { gray }}}) => gray };
  color: ${({ theme: { color: { white }}}) => white };

  &:hover {
    background: ${({theme: {color: { gray }}}) => darken('.05', gray) };
  }

  &:active, &:focus {
    background: ${({theme: {color: { gray }}}) => darken('.1', gray) };
  }

  svg {
    path {
      stroke: ${({ theme: { color: { white }}}) => white };
    }
  }
`

const warning = css`
  background: ${({ theme: { color: { warning }}}) => warning };
  color: ${({ theme: { color: { black }}}) => black };

  &:hover {
    background: ${({theme: {color: { warning }}}) => darken('.05', warning) };
  }

  &:active, &:focus {
    background: ${({theme: {color: { warning }}}) => darken('.1', warning) };
  }

  &:disabled {
    color: ${({ theme: { color: { white }}}) => white };
  }
`

const bigIcon = css`
  padding: 0;
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  border-radius: 0;

  svg {
    width: 100%;
    margin: 0;
  }

  &:disabled {
    background: transparent;
    cursor: not-allowed;

    &:hover {
      background: transparent;
    }
  }
`

const button = css`
  grid-area: ${({name}) => name};
  text-transform: uppercase;
  text-align: center;
  padding: 12px 12px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 32px;
  border: 1px solid;
  cursor: pointer;
  white-space: nowrap;
  
  p {
    font-weight: ${({theme: {fontWeight: {fontWeightBold}}}) => fontWeightBold};
    font-size: 12px;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background: ${({theme: {color: {mediumGray}}}) => mediumGray};
    cursor: not-allowed;

    &:hover {
      background: ${({theme: {color: {mediumGray}}}) => mediumGray};
    }
  }

  &.primary {
    ${primary}
  }

  &.primaryDark {
    ${primaryDark}
  }

  &.secondary {
    ${secondary}
  }

  &.inverse {
    ${inverse}
  }

  &.danger {
    ${danger}
  }

  &.dark {
    ${dark}
  }

  &.warning {
    ${warning}
  }
  
  &.bigIcon {
    ${bigIcon}
  }
`

const customButton = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  &:focus, svg:focus { outline: none }

  svg{
    cursor: pointer;
    width: 30px;  
    height: 30px;
    border-radius: 50%;
  }
`

export const DeleteButton = styled.div`
  ${customButton}
  svg.delete:hover{
    transform: scale(1.2) rotate(15deg);
    transition: .2s cubic-bezier(.22,.68,0,1.71);
    
    path.tampa{
      transform: translate(-20px, -10px) rotate(-15deg);
      transition: .2s cubic-bezier(.22,.68,0,1.71);
    }

    path:nth-child(2){
      fill: #F15249;
      transition: .2s cubic-bezier(.22,.68,0,1.71);
    }
  }
`

export const EditButton = styled.div`
  ${customButton}
  svg.edit:hover{
    transform: scale(1.2) rotate(-45deg);
    transition: .2s cubic-bezier(.22,.68,0,1.71);
    path:nth-child(2){
      fill: #7584f2;
      transition: .2s cubic-bezier(.22,.68,0,1.71);
    }
  }
`

export const ConfirmButton = styled.div`${customButton}`
export const CancelButton = styled.div`${customButton}`

export const StyledButtonAction = styled.button`
  ${button}
`

