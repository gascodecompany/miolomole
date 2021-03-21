import styled, { css } from 'styled-components'

export const LoginModalContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100vw;
  z-index: 99;
  background-color: ${({ theme: { color: { transparentBlack }}}) => transparentBlack };
  transition: .6s ${({isOpen}) => isOpen ? 0 : '.6s'} ease;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoginModalBody = styled.div`
  background-color: ${({ theme: { color: { white }}}) => white };
  height: 100%;
  width: 100vw;

  position: fixed;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  section {
    grid-area: form;  
    display: flex;
    flex-direction: column;
    width: 100%;
    label {
      align-self: center;
      justify-self: center;
    }
    input {
      width: 200px;
      margin-bottom: 40px;
      border-bottom: 1px solid ${({ theme: { color: { brand }}}) => brand };
    }
  }

  transition: .6s ease;

  @media (min-width: 768px){
    height: 450px;
    width: 600px;
    border-radius: 10px;
    section{
      input{
        width: 400px;
      }
    }
  }

`

export const FormWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

`

export const FormTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Close = styled.div`
  grid-area: close;
  position: absolute;
  right: 25px;
  top: 10px;

  cursor: pointer;

  font-size: 36px;

  transform: rotate(45deg);
`

export const Title = styled.h1`
  grid-area: title;
  font-size: 32px;
  margin: 0;
`

export const SubTitle = styled.h2`
  grid-area: subTitle;
  font-size: 14px;
  font-weight: normal;
`

export const LoginButton = styled.div`

`

export const Response = styled.div`
  
`