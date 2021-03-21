import styled from 'styled-components'

export const LoginContainer = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  z-index: 99;
`

export const LoginWrapper = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
  cursor: pointer;

  &:hover{
    svg{
      path:nth-child(1){
        transition: .3s ease;
        fill: #00BAAE;
      }
    }
  }
`