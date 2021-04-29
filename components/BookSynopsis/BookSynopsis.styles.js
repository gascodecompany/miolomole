import styled, { css } from 'styled-components';

export const BookSynopsis = styled.div`
  background: #FFE495;
  width: 100%;
  padding: 40px 20px;

  .container{
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen{
      @media (min-width: 1024px){
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-areas:
          "sinopsys cover"
          "video cover"
          "message message"
          "button button"
        ;
        gap: 20px;
      }
    }
  }

  #save{
    grid-area: button;
    padding: 5px;
    font-family: Montserrat;
    font-weight: bold;
    font-size: ${({ theme: { fontSize: { fontSizeS }}}) => fontSizeS };
    letter-spacing: 2.4px;
    color: #FFFFFF;
    width: 100%;
    background: ${({ theme: { color: { brand }}}) => brand };
    border-radius: 100px;
    border: none;
    color: white;
    box-shadow: 3px 3px 2px rgb(115 137 169 / 20%);
    transition: background 0.3s; 

    :hover{
      background: ${({ theme: { color: { brandDarkGreen }}}) => brandDarkGreen };
    }
  }
`

export const SynopsisWrapper = styled.div`
  grid-area: sinopsys;
`

export const SynopsisTitle = styled.div`
  font-family: Amatic SC;
  font-weight: bold;
  font-size: 40px;
  line-height: 1.5;
  display: flex;
  align-items: flex-end;
  letter-spacing: 2.4px;
  margin-bottom: 20px;
  color: #000000;

`
export const SynopsisInfo = styled.div`
  width: 80vw;

  @media screen{
    @media (min-width: 1024px){
      width: 70%;
    }
  }
`

export const SynopsisText = styled.div`
  textarea {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 1.8;
    margin-bottom: 30px;
    color: #4A4A4A;
    padding: 0;
    ${({isLoggedIn}) => !isLoggedIn 
      ? css `resize: none; background-color: transparent;` 
      : css `background-color: rgba(255, 255, 255, 0.5); padding: 10px;`
    }
    border: none;
    :focus { border: none }
    @media screen{
      @media (min-width: 1024px){
        width: 80%;
        margin-bottom: 20px;
        min-width: 500px;
        min-height: 150px;
        max-width: 700px;
        max-height: 400px;
      }
    }
  }
`

export const SynopsisImage = styled.img`
  grid-area: cover;
  width: 100%;
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  align-self: center;
`
export const SynopsisVideo = styled.div`
  grid-area: video;
  width: 200px;
  height: auto;
  margin-bottom: 30px;
  @media screen{
    @media (min-width: 1024px){
      width: 200px;
      height: auto;
    }
  }
`

export const InputVideo = styled.div`
  background-color: ${({ theme: { color: { blackLigthly }}}) => blackLigthly };
  opacity: 70%;
  width: 400px;
  height: 200px;
  border: 4px solid ${({ theme: { color: { blackLighter }}}) => blackLighter };;  
  border-radius: 10px;
  position: relative;
  cursor: not-allowed;
  :hover { background-color: ${({ theme: { color: { blackLighter }}}) => blackLighter } }
  /* :active { background-color: #858585 }; */
  :after {
    content: 'Video (em manutenção)';
    overflow: auto;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }
  transition: .1s all cubic-bezier(0.215, 0.610, 0.355, 1);
`

export const Message = styled.div`
  grid-area: message;
`