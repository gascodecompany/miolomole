import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  padding: 40px 40px 90px;
  bottom: 0px;
  background-color: ${({ theme: { color: { brandWhite }}}) => brandWhite };

  @media (min-width: 1024px){
    padding: 40px;
  }
` 
export const FooterNav = styled.nav`
  max-width: 1024px;
  margin: auto;
`
export const FooterNavList = styled.ul`
  @media (min-width: 1024px){
    display: grid;
    grid-template-areas:
      "logo phone chat whatsapp social"
      "logo address address address social";
    grid-template-columns: 240px 170px 100px 1fr 240px;
    align-items: center;
    grid-gap: 16px;
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