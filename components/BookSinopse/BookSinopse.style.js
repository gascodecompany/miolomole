import styled from 'styled-components';

export const BookSinopse = styled.div`
  background: #FFE495;
  width: 100%;
  padding: 0 40px;
  
  .container{
    flex-direction: row;
    justify-content: center
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

  color: #000000;

`
export const SinopseInfo = styled.div`
  width: 70%;

`

export const SinopseText = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 1.8;
  /* or 157% */
  width: 73%; 
  margin-bottom: 20px;
  color: #4A4A4A;

`
export const SinopseImage = styled.div`
  background-image: url(${({ img }) => img });
  width: 210px;
  height: 289px;
  background-size: contain;
  background-repeat: no-repeat;

`
export const SinopseVideo = styled.div`
  
    `