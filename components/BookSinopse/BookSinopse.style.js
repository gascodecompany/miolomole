import styled from 'styled-components';

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
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 1.8;
  margin-bottom: 30px;
  color: #4A4A4A;
  width: 100%;
  @media screen{
    @media (min-width: 1024px){
      width: 80%;
      margin-bottom: 20px;

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