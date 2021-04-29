import styled from 'styled-components';

export const BookGallery = styled.div`
  height: 400px;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  grid-template-rows: 50% repeat(3, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 40px;

  img:nth-child(1) { grid-area: 1 / 1 / 4 / 4; width: 80%; }
  img:nth-child(2) { grid-area: 4 / 1 / 5 / 2; width: 70%; }
  img:nth-child(3) { grid-area: 4 / 2 / 5 / 3; width: 70%; }
  img:nth-child(4) { grid-area: 4 / 3 / 5 / 4; width: 70%; }

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
  background-size: cover;
  overflow: hidden;
  justify-self: center;
`
