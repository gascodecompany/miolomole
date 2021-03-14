import styled from 'styled-components';
import Slider from "react-slick";

export const LatestArticles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: { color: { white }}}) => white };
  margin-bottom: 20px;

  @media (min-width: 768px){
    >.container{
      flex-direction: row;
      justify-content: space-between;
    }
  }
`

export const LatestArticlesList = styled(Slider)`
  &.slick-slider {
    max-width: 700px;
    display: grid;

    >.slick-list {
      grid-area: list;
      >.slick-track {
        >.slick-slide {
          display: flex;
          justify-content: center;
          padding: 15px;
        }  
      }
    }
  }
`

export const Title = styled.h1`
  position: relative;
  font-family: 'Amatic SC';
  font-size: ${({ theme: { fontSize: { fontSizeXXL }}}) => fontSizeXXL };
  line-height: 55px;
  letter-spacing: 2.4px;
  color: ${({ theme: { color: { brand }}}) => brand };

  @media (min-width: 768px){
    width: 350px;
  }
`

export const Arrows = styled.div`
  background-color: ${({ theme: { color: { white }}}) => white };
  height: 60px;
  width: 123px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  &::before{
    position: absolute;
    content: '';
    width: 1px;
    height: 40px;
    background-color: ${({ theme: { color: { grayLighter }}}) => grayLighter };
    transform: rotate(20deg);
  }

  .arrow{
    margin-top: 4px;
    width: 16px;
    height: 16px;
    position: relative;
    cursor: pointer;

    :hover{
      ::before, ::after{
        transition: .5s ease;
        background-color: ${({ theme: { color: { blackMedium }}}) => blackMedium }
      }
    }
  }
`

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px){
    align-items: unset;
  }
`

export const Next = styled.div`
  &::before{
    position: absolute;
    bottom: 4px;
    content: '';
    width: 16px;
    height: 1px;
    background-color: ${({ theme: { color: { blackLighter }}}) => blackLighter };
    transform: rotate(135deg);
  }
  &::after{
    position: absolute;
    top: 0;
    content: '';
    width: 16px;
    height: 1px;
    background-color: ${({ theme: { color: { blackLighter }}}) => blackLighter };
    transform: rotate(-135deg);
  }
`

export const Prev = styled.div`
  &::before{
    position: absolute;
    bottom: 4px;
    content: '';
    width: 16px;
    height: 1px;
    background-color: ${({ theme: { color: { blackLighter }}}) => blackLighter };
    transform: rotate(-135deg);
  }
  &::after{
    position: absolute;
    top: 0;
    content: '';
    width: 16px;
    height: 1px;
    background-color: ${({ theme: { color: { blackLighter }}}) => blackLighter };
    transform: rotate(135deg);
  }
`