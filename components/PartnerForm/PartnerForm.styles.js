import styled from 'styled-components'

export const PartnerForm = styled.div`
  margin: 10% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  section > form img { 
    width: 100%;
    max-width: 200px;
    height: auto; 
    cursor: pointer; 
    transition: .2s ease-in-out;
    border: 1px solid transparent;
    border-radius: 8px;
  }
  section > form img:hover { 
    filter: grayscale(100%);
    border: 1px solid rgba(100, 100, 100) 
  }
  section > form [name="logo"]{ display: flex; justify-content: center; }
  > section { width: 80%; margin: 0 auto;}
  > section > form > div, > section > form > button { margin: 15px }
  > section > form > button { justify-self: flex-end }
`

export const ResponseMessage = styled.span`
  height: 14px;
  margin: 30px 0px 45px;
`