import styled from 'styled-components';

export const ContactSocial = styled.li`
  margin-bottom: 28px;
  grid-area: ${({ name }) => name};
  justify-self: end;

  @media (min-width: 1024px){
    margin-bottom: 0; 
  }
`

export const ContactSocialList = styled.ul`
  display: flex;
`
export const ContactSocialListItem = styled.li`
  margin-left: 30px;
  display: flex;
  align-items: center;

  path {
    fill: ${({ theme: { color: { brand }}}) => brand };
    transition: .3s ease;
  }

  &:hover{
    path{
      fill: ${({ theme: { color: { blackLight }}}) => blackLight };
    }
  }
`