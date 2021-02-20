import styled from 'styled-components';

export const StoreSectionContainer = styled.div`
  width: 100%;
  height: 100%;
`
export const StoreTitle = styled.h1`
  font-family: 'Amatic SC';
  font-style: normal;
  font-weight: 400;
  font-size: 44px;
  text-align: center;
  color: #000000;
  line-height: 1;
  margin: 0;
  margin-bottom: 20px;

`
export const StoreApresentation = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  text-align: justify;
  line-height: 1;
  width: 85%;
  color: #000000;
  margin-bottom: 30px;
`
export const StorePartners = styled.div`
  width: 100%;

`
export const PartnerCard = styled.div`
  width: 100%;
  height: 400px;
  background-color: chocolate;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-image: url(${({ img }) => img });
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 30px;
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
    background: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.5;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35);
    position: absolute;
    bottom: -40px;

  }
`
export const PartnerText = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 0.8;
  text-align: center;
  letter-spacing: -0.4px;

  color: #FFFFFF;
`