import styled from 'styled-components';

export const BookGallery = styled.div`
  height: 400px;
  width: 90%;

  @media screen{
    @media (min-width: 1024px){
      width: 40%;
      margin-right: 40px;
    }
  }
`
export const BookCover = styled.div`
  background-image: url(${({ img }) => img });
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

`
