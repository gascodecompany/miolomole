import styled from 'styled-components';

export const BookComponent = styled.div`
  margin: 50px 0;
  padding-top: 65px;
`;
export const BookSection = styled.div`
  display: flex;
`
export const BookGalery = styled.div`
  width: 40%;
  height: 400px;
`
export const BookCover = styled.div`
  background-image: url(${({ img }) => img });
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
`