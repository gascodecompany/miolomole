import styled from 'styled-components';

export const PostJumbotron = styled.div`
  background-image: url(${({ img }) => img });
  width: 100vw;
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
