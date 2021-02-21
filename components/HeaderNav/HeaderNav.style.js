import styled from 'styled-components';

export const HeaderNav = styled.ul`
  grid-area: headerNav;
  width: 60%;
  list-style: none;
  justify-content: space-around;
  /* display: none; */
  font-family: Montserrat;
  font-weight: 500;
  font-size: 15px;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  padding: 0;
  top: 60px;
  position: relative;
  color: #474747;
  @media screen{
    @media (min-width: 1024px){
      position: unset;
      width: 60%;
      display: flex;
      margin: auto;
      margin-block-start: 1em;
      margin-block-end: 1em;
      max-width: 1030px;

    }
  }
  >li{
    letter-spacing: 0.13px;
    cursor: pointer;
    margin-bottom: 10px;

    @media (min-width: 1024px){
      margin-bottom: 0;
    }

    :hover{
      font-weight: 600;
      color: #00A79D;
      letter-spacing: 0;

    }
  }
`
export const NavItem = styled.li`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
  
  color: #474747;
  letter-spacing: 0.13px;
  margin-bottom: 10px;

  @media (min-width: 1024px){
    margin-bottom: 0;

  }
    cursor: pointer;
    :hover{
      font-weight: 600;
      color: #00A79D;
      letter-spacing: 0;
  }
`