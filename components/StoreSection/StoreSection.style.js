import styled from 'styled-components';

export const StoreSectionContainer = styled.div`
  width: 100%;
  height: 100%;
`


export const StorePartners = styled.div`
  width: 100%;
  background-color: ${({ theme: { color: { white }}}) => white };
  margin-top: -150px;
  margin-top: -20px;
  padding: 50px;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;

  @media screen{
    @media (min-width: 1024px){
      margin-top: -150px;
    }
  }
`
export const PartnerCard = styled.div`
  width: 280px;
  height: 280px;
  background-color: ${({ theme: { color: { white }}}) => white };
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 30px;

  @media screen{
    @media (min-width: 1300px){
      width: 320px;
      height: 320px;
    }
  }
`

export const PartnerLogo = styled.div`
  width: 100px;
  height: 100px;
  /* background-color: black; */
  position: relative;
  background-image: url(${({ img }) => img });
  background-size: contain;
  background-repeat: no-repeat;

  ::after{
    content: '';
    width: 100%;
    height: 2px;
    background: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35);
    position: absolute;
    bottom: -20px;

  }
`
export const PartnerText = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme: { fontSize: { fontSizeXS }}}) => fontSizeXS };
  line-height: 1.3;
  /* or 180% */

  text-align: center;
  letter-spacing: -0.4px;

  color: #000000;

`