import styled, { css } from "styled-components";
import Select from "react-select/async-creatable";
import Switch from "react-switch";
import Button from "../Button";
import Input from 'react-input-mask';
import { SortableContainer } from 'react-sortable-hoc';
import { Range } from 'rc-slider';
import { execOnce } from "next/dist/next-server/lib/utils";

const SortableSelect = SortableContainer(Select);

export const StyledInputSwitchs = styled.div`
`;

export const StyledInputDate = styled.div`
`;

export const InputRadio = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  /* ::before{
    position: absolute;
    content: '';
    width: 107px;
    height: 34px;
    top: 0;
    left: 0;
    border: 2px solid ${({ theme: { color: { whiteGray }}}) => whiteGray };
    border-radius: 20px;
  } */
`

export const InputRadioCheckMark = styled.div`
  width: 100px;
  height: 100px;
  right: 0;
  position: absolute;
`

export const InputRadioLabel = styled.label`
  width: 107px;
  height: 34px;
  border-radius: 20px;
  border: 1.5px solid ${({ theme: { color: { blackLigthly }}}) => blackLigthly };
  padding: 5px 16px;
  margin-right: 15px;
  text-align: center;
  font-family: 'Open Sans';
  font-weight: ${({ theme: { fontWeight: { fontWeightLight }}}) => fontWeightLight };
  
  &:has(input:checked){
    background-color: ${({ theme: { color: { blue }}}) => blue };
  }
`

export const InputRadioContainer = styled.div`
  display: flex;
  margin-bottom: 26px;

`

export const StyledInputSwitchLabel = styled.p`
  /* margin-left: ${({ theme: { spacing: { spacingXS }}}) => spacingXS};
  font-size: ${({ theme: { fontSize: { fontSizeXS }}}) => fontSizeXS};
  font-weight: ${({ theme: { fontWeight: { fontWeightBold }}}) => fontWeightBold}; */
`;

export const StyledInputSwitchOption = styled.div`
  /* display: flex;
  margin-bottom: ${({ theme: { spacing: { spacingXS }}}) => spacingXS}; */
`;

export const InputText = styled(Input)`
  width: 100%;
  border: none;
  border-bottom: 1px solid #151B64;
  padding: 24px 0 16px;
  font-size: ${({ theme: { fontSize: { fontSizeXXS }}}) => fontSizeXXS};

  &::placeholder {
    font-size: 0;
  }

  &:focus {
    outline: none;
  }
  /* 
  resize: none;
  
  
  &:disabled {
    background: ${({ theme: { color: { whiteLight }}}) => whiteLight};
  } */
`;

export const InputSearchContainer = styled.div`
  border-radius: ${({theme: { borderRadius: { borderRadiusXL}}}) => borderRadiusXL};
  background: ${({ theme: { color: { grayLight }}}) => grayLight};
  width: 200px;
  height: 41px;
  display: flex;
  align-items: center;
  position: relative;

  svg{
    position: absolute;
    right: 41px;
    top: 15px;
  }

  @media screen{
    @media (min-width: 375px){
      width: 220px;
      height: 41px;
      margin-right: 20px;
    }
    @media (min-width: 425px){
      width: 250px;
      height: 41px;
      margin-right: 20px;
    }
    @media (min-width: 768px){
      width: 500px;
      height: 41px;
    }
    @media (min-width: 1024px){
      width: 270px;
      height: 41px;
    }
    @media (min-width: 1440px){
      width: 353px;
      height: 41px;
    }
  }
`
export const InputSearch = styled.div`

`
export const switchStyles = {
  // option: (provided, {isSelected, isFocused}) => ({
  //   ...provided,
  //   backgroundColor: isSelected ? '#f05c22' : isFocused ? "#ffe7c2" : '#fafafa',
  // }),
  // menu: base => ({
  //   ...base,
  //   width: "102%",
  //   left: "-3px",
  //   border: "none",
  //   borderRadius: 0,
  //   margin: 0,
  //   padding: 0,
  //   backgroundColor: "transparent",
  // }),
}

export const StyledInputSwitch = styled(Switch)``;

export const StyledLabel = styled.label`
  /* font-size: 24px;
  font-weight: 600;
  color: $black;
  display: block;
  margin-bottom: 5px; */
`;

export const StyledInputSelect = styled(SortableSelect)`
  ${({variation}) => variation === 'borderSelect'
    ? css`
      width: 100%;
      font-size: ${({ theme: { fontSize: { fontSizeXS }}}) => fontSizeXS};
    
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
    
      &:focus {
        outline: none;
        border-color: none !important;
      }
    `
    : css`
      padding-top: 18px;
      border-bottom: 2px solid #BFC0C5;

      .inputSelect__control{
        border: none !important;
        box-shadow: unset !important;
        &:hover {
          border: none !important;
          box-shadow: unset !important;
        }
      }

      .inputSelect__indicator-separator {
        display: none;
      }

      .inputSelect__dropdown-indicator{
        
        svg{
          display: none;
        }
      
        ::after{
          content: '';
          height: 0;
          width: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 8px solid ${({ theme: { color: { blackMedium }}}) => blackMedium };
        }
      }

      .inputSelect__option--is-selected  {
          border: none;
        }

      .inputSelect__option--is-focused {
        background: ${({ theme: { color: { brand }}}) => brand};
        color: ${({ theme: { color: { white }}}) => white};

      }
  `};
`

export const StyledDropzone = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${({ type }) => (type === "image" ? "100%" : "43px")};
  width: 100%;
  min-width: 210px;
  min-height: 365px;
  border: 2px dashed ${({ theme: { color: { brand }}}) => brand};
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  cursor: pointer;

  a,
  p {
    color: $black;
    font-weight: 700;
    text-align: center;
    padding: 0 10px;

    &:visited {
      color: ${({theme: {color: {brandDark}}}) => brandDark};
    }
  }
  >img{
    max-width: 100%;
    width: 100%;
  } */
`;

export const StyledFieldError = styled.p`
  /* position: absolute;
  display: block;
  background-color: #b60000;
  color: #fff;
  top: -20px;
  right: 20px;
  padding: 2px 10px; */
`;

export const StyledFieldLink = styled(Button)`

`;

export const TextArea = styled.textarea`
  border: 1px solid #151B64;
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  height: 140px;
  margin-top: 24px;
  padding: 10px;
  font-family: 'Open Sans';
  font-size: 14px;
  line-height: 20px;
  color: #A1A1A1;

  &:focus {
    outline: none;
    border: 1px solid #151B64;
  }
`

export const InputRange = styled(Range)`
  margin: 20px 0;
  height: 20px
`
