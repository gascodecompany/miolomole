import styled from "styled-components";

export const StyledForm = styled.section`
  form{
    display: grid;
    ${({gridTemplate, joinUsWay}) => gridTemplate({joinUsWay})};
  }
`;