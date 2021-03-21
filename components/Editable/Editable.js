import { useState, useEffect, cloneElement, useRef } from 'react';
import * as S from './Editable.styles';

export default function Editable ({ children, value }) {

  const [edit, setEdit] = useState(false);
  const [editableValue, setEditableValue] = useState(value);
  const inputRef = useRef()
  useEffect(() => setEditableValue(value), [value])
  useEffect(() => edit && inputRef.current.focus(), [edit])

  return (
    <S.Editable>
      <S.EditableButtons>
        <S.EditButton onClick={() => {setEdit(!edit)}}>{ edit ? 'S' : 'E' }</S.EditButton>
        { edit && <S.CancelButton onClick={() => { setEditableValue(value); setEdit(false)}}>C</S.CancelButton> }
      </S.EditableButtons>
      { cloneElement(children, { 
        edit, 
        ref: inputRef,
        value: editableValue, 
        onChange: ({ target }) => setEditableValue(target.value),
        onBlur: () => {
          if (!confirm('Salvar alteração?')) { setEditableValue(value) } 
          return setEdit(false)
        }
      }) }
    </S.Editable>
  )
}