import styled from 'styled-components';

export const HeaderNav = styled.ul`
  grid-area: headerNav;
  width: 80%;
  list-style: none;
  justify-content: space-around;
  display: none;
  
  @media screen{
    @media (min-width: 1024px){
      display: flex;

    }
  }
`
export const NavItem = styled.li`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 16px;

  text-align: center;

  color: #474747;
`