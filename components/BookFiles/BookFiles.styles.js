import styled from "styled-components";

export const BookFiles = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  /* video { height: 300px; } */
  padding: 30px;

  button { margin: 0 auto; }

  [type="audio"]{
    > div {
      max-width: 450px;
    }
  }
`