import styled from 'styled-components';

export const HeaderNav = styled.ul`
  grid-area: headerNav;
  width: 80%;
  list-style: none;
  justify-content: space-around;
  display: none;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 15px;

  text-align: center;

  color: #474747;
  @media screen{
    @media (min-width: 1024px){
      display: flex;
      max-width: 1030px;

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

  @media (min-width: 1024px){

  }
`