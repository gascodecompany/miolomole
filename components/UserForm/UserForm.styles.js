import styled from 'styled-components';

export const Usuarios = styled.div`
  
`

export const UsuariosWrapper = styled.div`
  margin: 10% auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > section { width: 80%; margin: 0 auto;}
  > section > form > div, > section > form > button { margin: 15px }
  > section > form > button { justify-self: flex-end }
  textarea {
    width: 100%;
    height: 170px;
    resize: none;
  }
`

export const ResponseMessage = styled.div`
  
`