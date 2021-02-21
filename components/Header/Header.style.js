import styled from 'styled-components';



export const Header = styled.div`
  position: sticky;
  background-color: ${({ theme: { color: { brandWhite }}}) => brandWhite };
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  z-index: 99;

  .logo-miolo {
    /* display: flex;
    align-items: center; */
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 30px;
    @media (min-width: 1024px){
      margin: 0;
      margin-left: 20px;
      position: unset;
      height: 40px;

    }
  }
  >.container{
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    padding: 8px 16px;
    /* margin-right: 10px; */

  }
  @media screen{
    @media (min-width: 1024px){
      >logo-miolo {
        position: initial;

        >svg {
          position: relative;
          height: 80px;
          width: 140px;
          top: 0;
          left: 10px;
        }
      }
    }
  }
`
export const HeaderMenu = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 99;
  background-color: ${({ theme: { color: { transparentBlack }}}) => transparentBlack };
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
export const HeaderMenuContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { color: { white }}}) => white };
  width: 100vw;
  max-width: 280px;
  height: 100vh;
  padding: 20px;
  transform: translateX(${({isOpen}) => isOpen ? 0 : '-280px'});
  transition: .6s ease;

  >.logo-miolo {
    position: absolute;
    top: 10px;
    left: 15px;
    width: 43px;
    right: 0;
    grid-area: logo-miolo;
    > svg {
      /* margin-bottom: 20px; */
    }
  }

  .searchField {
    height: fit-content;
    display: block;
    top: 40px;
    display: none;
    >input{
      max-width: 0%;
      background: ${({ theme: { color: { grayLight }}}) => grayLight};
      
      &:focus {
        max-width: 100%;
      }
    
    }
  }

  .hamburger {
    position: absolute;
    top: 15px;
    right: 15px;
    width: auto;
    /* height: auto; */
  }
  
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
      /* display: grid;
      align-items: center;
      grid-template-areas: ${`
        "logo-miolo headerNav search"
      `};
      grid-template-columns: auto 80vw 30px;
      grid-gap: 10px 20px; */

      >.logo-miolo {
        display: none;
      }

      .searchField {
        display: flex;
        position: absolute;
        top: 20px;
        right: 20px;
        justify-content: flex-end;


        >input {
          background-color: ${({ theme: { color: { whiteLight }}}) => whiteLight };
          transition: .3s ease;
          width: 100%;
          font-size: 12px;
          border: none;
          outline: none;
          padding: 8px 30px 8px 16px;
          /* max-width: unset; */
        }
      }

      .contactAddress {
        white-space: nowrap;
        margin-right: 20px;
        
        span {
          color: ${({ theme: { color: { blackLigthly }}}) => blackLigthly };
        }

        br {
          display: none;
        }

        a {
          &:after {
            display: none;
          }
        }
      }
    }
  }
  
`
export const SearchField = styled.div`
  grid-area: search;
  position: relative;
  height: fit-content;
  input {
    background-color: transparent;
    border-radius: 50px;
    /* width: auto; */
    max-width: 35px;
    transition: .3s ease;
    font-size: 14px;
    border: none;
    outline: none;
    padding: 8px 30px 8px 16px;


    &:focus {
      max-width: 30vw;
      background-color: ${({ theme: { color: { brandLighter }}}) => brandLighter };
    }
  }

  >svg {
    position: absolute;
    /* top: 7px; */
    pointer-events: none;
    right: 0px;
  }  

  @media screen{
    @media (min-width: 1024px){
      right: 10px;
      display: none;
    }
  }
`
// export const HeaderWelcome = styled.p`
//   grid-area: welcome;
//   color: ${({ theme: { color: { whiteDark }}}) => whiteDark };
//   font-size: ${({ theme: { fontSize: { fontSizeXXS }}}) => fontSizeXXS };
//   font-weight: ${({ theme: { fontWeight: { fontWeightRegular }}}) => fontWeightRegular };
//   line-height: 16px;
//   margin-bottom: 20px;

//   @media screen{
//     @media (min-width: 1024px){
//       margin: 0;
//     }
//   }
// `






// export const HeaderContainer = styled.header`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   padding: 8px 16px;
//   width: 100%;
//   max-width: 1024px;
// `