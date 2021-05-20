import styled from 'styled-components';

export const HeaderNav = styled.ul`
  grid-area: headerNav;
  list-style: none;
  justify-content: space-around;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 15px;
  text-align: center;
  margin: 0 auto;
  height: 170px;
  width: 100%;
  padding: 0;
  top: 90px;
  position: relative;
  color: #474747;
  @media screen {
    @media (min-width: 1024px) {
      height: unset;
      position: unset;
      width: 80%;
      display: flex;
      margin: auto;
      margin-right: 20px;
      margin-block-start: 1em;
      margin-block-end: 1em;
      max-width: 1030px;
    }
  }
`
export const NavItem = styled.li`
  letter-spacing: 0.13px;
  cursor: pointer;
  margin-bottom: 10px;
  transition: all 0.3s;

  :hover{ color: #00A79D }

  :active{ color: #0A8B85 }
  
  @media (min-width: 1024px) { margin-bottom: 0 }
`