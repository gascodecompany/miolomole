import styled from 'styled-components';

export const BookSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen{
    @media (min-width: 1024px){
      flex-direction: row;
      align-items: center;
      .container{
        flex-direction: row;
      }
    }
  }
`
