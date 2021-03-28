import styled from 'styled-components'

export const LogoutContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 99;
`

export const LogoutWrapper = styled.div`
  position: fixed;
  bottom: 25px;
  right: 25px;
  cursor: pointer;
  
  @media (min-width: 768px){
    bottom: 25px;
    right: 25px;
  }
`