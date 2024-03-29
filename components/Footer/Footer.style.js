import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  /* position: absolute; */
  bottom: 0px;
  /* padding: 40px 40px 90px; */
  bottom: 0px;
  background-color: ${({ theme: { color: { brandWhite }}}) => brandWhite };
  .container{
    padding: 0;
  }
  @media (min-width: 1024px){ 
    /* padding: 40px; */
  }
` 
export const FooterNav = styled.nav`
  width: 100%;
  margin: auto;
`
export const FooterNavList = styled.ul`
  list-style: none;
  border-bottom: 1px solid #474747;
  padding-inline-start: 0;
  padding: 0 16px;
  flex-direction: column;
  
  @media (min-width: 1024px){
    flex-direction: row;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 20px;
    justify-content: space-between;
  }
`

export const FooterNavItem = styled.li`
  margin-bottom: 28px; 
  cursor: pointer;
  grid-area: ${({ name }) => name };
  justify-self: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme: { fontSize: { fontSizeXS }}}) => fontSizeXS };
  line-height: 16px;
  /* background-color: ${({ theme: { color: { blackDark }}}) => blackDark }; */

  text-align: center;

  /* color: #474747; */

  @media (min-width: 1024px){
    margin-bottom: 0; 
  }
  
`
export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  padding-bottom: 20px;
  width: 100%;
  flex-direction: column-reverse;
  @media screen{
    @media (min-width: 1024px){
      flex-direction: row;
    }
  }
`