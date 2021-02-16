import styled from 'styled-components';

export const FooterNav = styled.ul`
  grid-area: headerNav;
  width: 60%;
  list-style: none;
  justify-content: space-around;
  display: none;
  color: #474747;
  font-family: Roboto;
  cursor: pointer;

  /* font-style: normal; */
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  /* identical to box height, or 100% */

  text-align: center;

  @media screen{
    @media (min-width: 1024px){
      display: flex;

    }
  }
`
export const NavItem = styled.li`
  font-family: Roboto;
  /* font-style: normal; */
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  /* identical to box height, or 100% */
  text-align: center;

  @media (min-width: 1024px){
    font-family: Roboto;
    /* font-style: normal; */
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    /* identical to box height, or 100% */

    text-align: center;
  }
`