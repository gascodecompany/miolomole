import styled, { css } from "styled-components";

export const StyledForm = styled.section`
  form{
    display: grid;
    ${({gridTemplate, joinUsWay}) => gridTemplate({joinUsWay})};
  }
  ${({striped}) => striped && css`
    div.field:nth-child(even){
      background-color: ${({ theme: { color: { gray }}}) => gray };
    }
  `}
`;