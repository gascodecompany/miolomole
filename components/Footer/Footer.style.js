import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0px;
  /* padding: 40px 40px 90px; */
  bottom: 0px;
  /* background-color: ${({ theme: { color: { brandWhite }}}) => brandWhite }; */

  @media (min-width: 1024px){
    /* padding: 40px; */
  }
` 
export const FooterNav = styled.nav`
  /* max-width: 1024px; */
  margin: auto;

`
export const FooterNavList = styled.ul`
  list-style: none;
  border-bottom: 1px solid #474747;
  @media (min-width: 1024px){

    display: flex;
    align-items: center;
    margin-bottom: 40px;
    padding: 35px 40px;
    justify-content: space-between;
    /* display: grid;
    grid-template-areas:
      "logo headerNav headerNav headerNav social"
      "logo headerNav headerNav headerNav social";
    grid-template-columns: 240px 170px 100px 1fr 240px;
    align-items: center;
    grid-gap: 16px; */
  }
`

export const FooterNavItem = styled.li`
  margin-bottom: 28px; 
  cursor: pointer;
  grid-area: ${({ name }) => name };
  justify-self: center;

  @media (min-width: 1024px){
    margin-bottom: 0; 
  }
  
`
export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  padding-bottom: 40px;

`