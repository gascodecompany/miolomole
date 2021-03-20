import styled from 'styled-components';

export const Editable = styled.div`
  position: relative;

  >div {
    display: none;
  }

  &:hover {
    >div {
      display: block;
    }
  }
`

export const EditableButtons = styled.div`
  position: absolute;
  right: 0;
`
export const EditButton = styled.button`
`
export const CancelButton = styled.button`
`