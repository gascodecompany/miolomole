import styled, {css} from 'styled-components';
import CurrencyFormat from 'react-currency-format';
import setColorByBackGround from '../../helpers/setColorByBackGround';

export const LatestArticle = styled.div`
  box-shadow: 0px 4px 10px rgba(115, 137, 169, 0.15);
  border: none;
  border-radius: 12px;  
  overflow: hidden;
  transition: .1s ease;
  cursor: pointer;
  width: 100%;
  max-height: 469px;
  max-width: 300px;
`

export const LatestArticleImage = styled.img`
  height: 240px;
  width: 100%;  
  object-fit: cover;  
`

export const LatestArticleInfo = styled.div`
  padding: 32px;
  background-color: ${({ theme: { color: { gray }}}) => gray };
`

export const LatestArticleTitle = styled.h1`
  font-family: Arvo;
  font-weight: normal;
  font-size: 22px;
  line-height: 32px;
  color: #212121;
  margin-block-start: 0;
  margin-block-end: 0em;
  height: 35px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
export const LatestArticleText = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #4A4A4A;

  position: relative;
  height: 80px;
  overflow: hidden;  
  
  &:after {
    content: "";
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 70%;
    height: 1.2em;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), #F7F8F9 50%);
  }
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`

export const FooterItemLabel = styled.div`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 9px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  color: #9FA3A7;

  svg{
    margin-right: 5px
  }

  @media (min-width: 768px){
    font-size: 12px;
    svg{
      margin-right: 10px
    }
  }
`
