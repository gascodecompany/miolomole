import { forwardRef } from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

export const Editable = styled.div`
  position: relative;
  z-index: 1;
  
  >div {
    display: none;
  }

  &:hover {
    >div {
      display: block;
    }
  }
`

export const EditableInput = styled(forwardRef((props, ref) => <TextareaAutosize {...props} ref={ref} />))`${({styles}) => {console.log(styles); return styles} }`

export const EditableButtons = styled.div`
  position: absolute;
  right: 0;
`
export const EditButton = styled.button`
`
export const CancelButton = styled.button`
`