import styled from 'styled-components';

export const OurProductsList = styled.div`
  position: relative;
`;

export const AddBookButton = styled.div`
  top: 0px;
  right: 0px;
  background-color: white;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-bottom: 30px;
  span {
    font-size: 36px;
    line-height: 56px;
    font-weight: 500;
  }
  &:hover {
    color: ${({ theme: { color: { blue }}}) => blue };
    transition: .5s cubic-bezier(.22,.68,0,1.71);
  }

  @media (min-width: 768px){
    position: absolute;
    width: 200px;
    top: -40px;
  }
`
export const OurProductsApresentation = styled.div`
  width: 100%;
  text-align: center;
` 
export const OurProductsTitle = styled.h1`
  font-family: Amatic SC;
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  line-height: 50px;
  color: #000000;
  margin: 0;
  margin-bottom: 30px;
  width: 100%;
  white-space: break-spaces;

`
export const OurProductsText = styled.p`
  font-family: Montserrat;
  font-weight: 500;
  font-size: ${({ theme: { fontSize: { fontSizeSMM }}}) => fontSizeSMM };
  line-height: 30px;
  text-align: center;
  color: #000000;
  width: 100%;
  white-space: break-spaces;
  border: none;
  margin: 0;
  padding: 0;
  resize: none;
  margin-bottom: 30px;
`
export const ProductCards = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
`
export const ProductCard = styled.div`
  text-align: center;
  margin-bottom: 50px;
  width: 250px;

  cursor: pointer;
  @media screen{
    @media (min-width: 1024px){
      width: 250px;
    }
  }
`

export const ProductCardImage = styled.div`
  width: 250px;
  height: 320px;
  background-image: url(${({ img }) => img });
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 10px;
`
export const ProductCardTitle = styled.div`
  font-family: Montserrat;
  font-weight: 600;
  font-size: ${({ theme: { fontSize: { fontSizeXS }}}) => fontSizeXS };
  line-height: 26px;
  color: #000000;
  margin-bottom: 5px;
`
export const ProductCardPrice = styled.div`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  text-align: center;

  color: #000000;
`