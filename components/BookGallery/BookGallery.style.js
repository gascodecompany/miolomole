import styled from 'styled-components';

export const BookGallery = styled.div`
  height: 400px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media screen{
    @media (min-width: 1024px){
      width: 40%;
      margin-right: 40px;
    }
  }
`
export const BookCover = styled.img`
  height: auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  overflow: hidden;
  margin: 0 auto;
  @media (min-width: 1024px){
    margin: 0;
  }
`
