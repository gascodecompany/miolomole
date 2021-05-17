import styled from 'styled-components';

export const BookAcessivel = styled.div`
  padding-top: 65px;
  height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .container { justify-content: unset }
`;

export const Title = styled.h1`
  text-align: center;
`

export const Book = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;

  &.describle {
    background-color: ${({ theme: { color: { brandSmoth }}}) => brandSmoth };
  }
`

export const BookWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`