import styled from 'styled-components';

export const StoreSectionContainer = styled.div`
  width: 100%;
  height: 100%;
`


export const StorePartners = styled.div`
  position: relative;
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
  position: relative;

  @media screen{
    @media (min-width: 1300px){
      width: 320px;
      height: 320px;
    }
  }
`
export const AddPartnerButton = styled.div`
  top: 0px;
  right: 0px;
  background-color: white;
  width: 200px;
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

  @media (min-width: 1024px){
    position: absolute;
    top: -40px;
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

export const DeleteButton = styled.div`
  cursor: pointer;
`

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  &:focus, svg:focus {
    outline: none;
  }

  svg{
    cursor: pointer;
    width: 30px;  
    height: 30px;
    border-radius: 50%;
  }

  svg.edit{
    /* transform: rotate(-45deg); */
  }

  svg.delete:hover{
    transform: scale(1.2) rotate(15deg);
    transition: .2s cubic-bezier(.22,.68,0,1.71);
    
    path.tampa{
      transform: translate(-20px, -10px) rotate(-15deg);
      transition: .2s cubic-bezier(.22,.68,0,1.71);
    }

    path:nth-child(2){
      fill: #F15249;
      transition: .2s cubic-bezier(.22,.68,0,1.71);
    }
  }

  svg.edit:hover{
    transform: scale(1.2) rotate(-45deg);
    transition: .2s cubic-bezier(.22,.68,0,1.71);
    path:nth-child(2){
      fill: #7584f2;
      transition: .2s cubic-bezier(.22,.68,0,1.71);
    }
  }
`

export const EditButton = styled.div`
  cursor: pointer;
`