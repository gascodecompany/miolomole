import { useState, useEffect, cloneElement, useRef } from 'react';
import * as S from './Editable.styles';

export default function Editable ({ children, text, textKey }) {

  const [edit, setEdit] = useState(false);
  const [editableValue, setEditableValue] = useState(text);
  const inputRef = useRef()
  useEffect(() => setEditableValue(text), [text])
  useEffect(() => edit && inputRef.current.focus(), [edit])

  return (
    <S.Editable>
      <S.EditableButtons>
        <S.EditButton onClick={() => {setEdit(!edit)}}>{ edit ? 'S' : 'E' }</S.EditButton>
        { edit && <S.CancelButton onClick={() => { setEditableValue(text); setEdit(false)}}>C</S.CancelButton> }
      </S.EditableButtons>
      { cloneElement(children, { 
        edit, 
        ref: inputRef,
        value: editableValue, 
        onChange: ({ target }) => setEditableValue(target.value),
        onBlur: async () => {
          if (!confirm('Salvar alteração?')) { 
            setEditableValue(text) 
          } else { 
            await fetch("localhost:3000/api/textos", { method: "PUT", body: { textKey, text: editableValue, editetBy: 'browser' } })
              .catch((res) => console.log(res)) 
          }
          return setEdit(false)
        }
      }) }
    </S.Editable>
  )
}