import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: auto;
  padding: 20px;

  @media screen{
    @media (min-width: 1024px){
      padding: 40px;
    }
  }
`
export const Map = styled.div`
  display: block;
`