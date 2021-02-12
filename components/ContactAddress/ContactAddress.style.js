import styled from 'styled-components';

export const ContactAddressListItem = styled.li`
  display: flex;
  margin-bottom: 28px;
  grid-area: ${({ name }) => name};

  svg{
    margin-left: 2px;
    margin-right: 8px;
    width: 12px;
  }

  a{
    position: relative;
    display: flex;
    align-items: center;
    
    /* &:after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      display: block;
      width: 100%;
      max-width: 0;
      height: 2px;
      background-color: ${({ theme: { color: { brand }}}) => brand};
      transition: .3s ease;
    }

    &:hover {
      &:after {
        max-width: 100%;
        transition: .3s ease;
      }
    } */
  }

  @media (min-width: 1024px){
    margin-bottom: 0;
    letter-spacing: 0.3px;

    br {
      display: none;
    }

    &:hover {
      &:after {
        max-width: 520px;
        transition: .3s ease;
      }
    }
  }
`

export const Label = styled.span`
  font-size: ${({ theme: { fontSize: { fontSizeXXS }}}) => fontSizeXXS};
  font-weight: ${({ theme: { fontWeight: { fontWeightMedium }}}) => fontWeightMedium};
  text-transform: capitalize;
  color: ${({ theme: { color: { blackMedium }}}) => blackMedium };
  letter-spacing: -0.3px;
  line-height: 18px;
  position: relative;
  width: max-content;
`