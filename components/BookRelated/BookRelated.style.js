import styled from 'styled-components';

export const BookRelated = styled.div`

`
export const RelatedBooks = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-flow: wrap;
  flex-direction: column;
  @media screen{
    @media (min-width: 1024px){
      flex-direction: row;
    }
  }
`
export const RelatedTitle = styled.div`
  font-family: Amatic SC;
  font-weight: bold;
  font-size: 40px;
  line-height: 1.3;
  display: flex;
  align-items: flex-end;
  letter-spacing: 2.4px;
  color: #000000;
  margin-bottom: 20px;

`
export const BookRelatedCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

`
export const BookRelatedCover = styled.div`
  background-image: url(${({ img }) => img });
  width: 150px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;

`
export const BookRelatedItemTitle = styled.div`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  color: #071825;
  margin: 20px;
`