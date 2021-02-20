import styled from "styled-components";

export const StyledForm = styled.section`
  display: grid;
  ${({gridTemplate, joinUsWay}) => gridTemplate({joinUsWay})};
`;