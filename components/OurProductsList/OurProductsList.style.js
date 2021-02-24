import styled from 'styled-components';

export const OurProductsList = styled.div`
  .container{

  }
`;

export const OurProductsTitle = styled.div`
  font-family: Amatic SC;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  color: #000000;
  margin-bottom: 30px;
`
export const OurProductsText = styled.div`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #000000;
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
  cursor: pointer;
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
  font-size: 16px;
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