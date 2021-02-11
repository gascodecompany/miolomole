import styled from 'styled-components';

export const StyledHamburger = styled.div`
  grid-area: hamburger;
  position: relative;
  width: 30px;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
  }

  @media screen {
    @media (min-width: 1024px) {
      display: none;
    }
  }
`

export const StyledHamburgerBread = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 30px;
  height: 30px;
`

export const StyledHamburgerMeat = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({isOpen}) => isOpen ? 'transparent' : 'black'};
  border-radius: 2px;

  &::before,
  &::after {
    content: "";
    position: relative;
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${({isOpen}) => isOpen ? 'transparent' : 'black'};
    border-radius: 2px;
    transition: transform .5s ease;
  }

  &::before {
    top: -7px;
    transform: ${({isOpen}) => isOpen ? 'translate(0px, 7px) rotate(40deg)' : ''};
  }

	&::after {
    top: 5px;
    transform: ${({isOpen}) => isOpen ? 'translate(0px, -7px) rotate(-40deg)' : ''};
  }

  @media screen {
    @media (min-width: 1024px) {
      background-color: ${({isOpen}) => isOpen ? 'transparent' : 'black'};;

      &::before,
      &::after {
        background-color: gray;
      }
    }
  }
`

