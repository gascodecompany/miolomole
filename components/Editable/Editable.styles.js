import { forwardRef } from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import EditIcon from '../../images/icons/svg/pen.svg'
import SaveIcon from '../../images/icons/svg/checked.svg'
import CancelIcon from '../../images/icons/svg/cancel.svg'

export const Editable = styled.div`
  position: relative;
  z-index: 1;
  
  >div {
    display: none;
  }

  &:hover {
    >div {
      display: flex;
    }
  }
`

export const EditableInput = styled(forwardRef((props, ref) => <TextareaAutosize {...props} ref={ref} />))`${({styles}) => styles }`

export const EditableButtons = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
`
export const EditButton = styled.button`
  background-color: transparent;
  border: none;

  svg{
    width: 20px;  
    height: 20px;
  }
`
export const CancelButton = styled.button`
  background-image: url(${CancelIcon});
  background-size: cover;
  background-color: none;
  width: 20px;  
  height: 20px;
  border: none; 
  margin: 5px 5px 5px 0;

`
export const SavedIcon = styled.div`
  background-image: url(${SaveIcon});
  background-size: cover;
  background-color: none;
  width: 20px;  
  height: 20px;
  border: none; 
  margin: 5px;

  svg{
    width: 20px;  
    height: 20px;
  }
`