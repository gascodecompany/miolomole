import { forwardRef } from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

export const Editable = styled.div`
  position: relative;
  z-index: 1;
  >div { display: none }
  &:hover { >div { display: block } }
`

export const EditableInput = styled(forwardRef((props, ref) => <TextareaAutosize {...props} ref={ref} />))`${({styles}) => styles }`

export const EditableButtons = styled.div`
  position: absolute;
  right: 0;
  top: 5px;
  display: flex;
  align-items: center;
  z-index: 10;
`
export const EditButton = styled.button`
  background-color: transparent;
  border: none;
`
export const CancelButton = styled.button`
  background-color: transparent;
  border: none; 
  margin: 5px 5px 5px 0;
  svg{
    width: 20px;  
    height: 20px;
  }

`