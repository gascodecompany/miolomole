import styled from 'styled-components'

export const PartnerForm = styled.div`
  margin: 10% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  > section { width: 80%; margin: 0 auto;}
  > section > form > div, > section > form > button { margin: 15px }
  > section > form > button { justify-self: flex-end }
`

export const ErrorMessage = styled.span`
  height: 14px;
`