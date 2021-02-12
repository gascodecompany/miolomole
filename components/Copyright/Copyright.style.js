import styled from 'styled-components';

export const Copyright = styled.section`
  font-size: 12px;
  font-weight: ${({ theme: { fontWeight: { fontWeightMedium }}}) => fontWeightMedium};
  color: ${({ theme: { color: { blackMedium }}}) => blackMedium };
  letter-spacing: 0.5px;
  line-height: 22px;
  padding-top: 28px;
  border-top: 1px solid ${({ theme: { color: { blackMedium }}}) => blackMedium };

  @media (min-width: 1024px){
    margin-top: 28px;
    text-align: center;
    
    br {
      display: none;
    }
  }
`