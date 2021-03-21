import styled from 'styled-components'

export const LoginContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 99;
`

export const LoginWrapper = styled.div`
  position: fixed;
  bottom: 25px;
  right: 25px;
  cursor: pointer;

  &:hover{
    svg{
      path:nth-child(1){
        transition: .3s ease;
        fill: #00BAAE;
      }
    }
  }

  @media (min-width: 768px){
    bottom: 50px;
    right: 50px;
  }
`