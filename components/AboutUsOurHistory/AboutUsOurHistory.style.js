import styled from 'styled-components';

export const AboutUsOurHistory = styled.div`
  margin-bottom: 130px;

  .container{
    align-items: end;

    @media screen{
      @media (min-width: 1024px){
        padding: 0;
      }
    }
    .grayBox{
      width: 325px;
      height: 515px;
      background: #D8D8D8;
      position: absolute;
      right: -160px;
      bottom: -90px;
    }
  }
`;

export const OurHistoryWrapper = styled.div`
  background: #333333;
  width: 84%;
  /* margin: 0 auto; */
  padding: 50px;
  margin-top: -180px;
  position: relative;
  ::before{
    content: '';
    position: absolute;
    width: 40%;
    height: 100%;
    top: 0px;

  }


`

export const OurHistoryTitle = styled.div`
  font-family: Amatic SC;
  font-weight: bold;
  font-size: 75px;
  letter-spacing: 2.4px;
  color: #00A79D;
  width: 80%;
  margin-bottom: 20px;
`

export const OurHistoryText = styled.div`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 17px;
  line-height: 30px;
  color: #FFFFFF;
  width: 80%;

`