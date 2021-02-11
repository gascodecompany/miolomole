import styled from 'styled-components';

export const Header = styled.div`
  position: sticky;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  z-index: 99;
  background-color: #FAFAFA;
  
  .LogoMiolo{
    width: 45px;
    height: auto;
    @media screen{
      @media(min-width: 1024px){
        width: 55px;

      }
    }
  }
`
export const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  width: 100%;

  @media screen{
    @media (min-width: 1024px){
      padding: 12px 50px;
    }
  }

`
export const HeaderMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 99;
  transition: .6s ${({isOpen}) => isOpen ? 0 : '.6s'} ease;
  opacity: ${({isOpen}) => isOpen ? 1 : 0};
  pointer-events: ${({isOpen}) => isOpen ? 'initial' : 'none'};

  @media screen{
    @media (min-width: 1024px){
      position: initial;
      top: initial;
      left: initial;
      height: initial;
      width: initial;
      z-index: initial;
      background-color: initial;
      transition: initial;
      opacity: initial;
      pointer-events: initial;
      flex: 1;
    }
  }
`
export const HeaderMenuContainer = styled.div`
  position: relative;
  background-color: ${({ theme: { color: { black }}}) => black };
  width: 100vw;
  max-width: 320px;
  height: 100vh;
  padding: 20px;
  transform: translateX(${({isOpen}) => isOpen ? 0 : '-320px'});
  transition: .6s ease;

    @media screen{
      @media (min-width: 1024px){
        position: initial;
        background-color: initial;
        width: initial;
        max-width: initial;
        height: initial;
        padding: initial;
        transform: initial;
        transition: initial;
        /* display: grid; */
        align-items: center;
        grid-template-areas: ${`
          "welcome search address"
          "nav nav nav"
        `};
        grid-template-columns: auto 1fr auto;
        grid-gap: 10px 20px;
      }
    }
`
export const Search = styled.img`

`