import styled, { css } from 'styled-components';

export const BookSinopse = styled.div`
  background: #FFE495;
  width: 100%;
  padding: 0 40px;

  .container{
    justify-content: center;
    flex-direction: column;
    @media screen{
      @media (min-width: 1024px){
        flex-direction: row;
      }
    }
  }

  button{
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

export const SinopseTitle = styled.div`
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
export const SinopseInfo = styled.div`
  width: 80vw;

  @media screen{
    @media (min-width: 1024px){
      width: 70%;
    }
  }
`

export const SinopseText = styled.div`
  textarea {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 1.8;
    margin-bottom: 30px;
    color: #4A4A4A;
    min-width: 500px;
    min-height: 200px;
    max-width: 700px;
    max-height: 400px;
    ${({isLoggedIn}) => !isLoggedIn 
      ? css `
        resize: none;
        background-color: transparent;
      ` : css `
          background-color: rgba(255, 255, 255, 0.5);
      `
    }
    border: none;
    :focus { border: none }
    @media screen{
      @media (min-width: 1024px){
        width: 80%;
        margin-bottom: 20px;
      }
    }
  }
`

export const SinopseImage = styled.div`
  background-image: url(${({ img }) => img });
  width: 210px;
  height: 289px;
  background-size: contain;
  background-repeat: no-repeat;
  @media screen{
    @media (min-width: 1024px){
      width: 280px;
      height: 369px;
    }
  }
`
export const SinopseVideo = styled.div`
  width: 100%;
  height: 50vw;
  margin-bottom: 30px;
  @media screen{
    @media (min-width: 1024px){
      width: 40%;
      height: 230px;
    }
  }
`

export const Message = styled.div`
  
`