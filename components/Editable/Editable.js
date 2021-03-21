import { useState, useEffect, cloneElement, useRef } from 'react';
import * as S from './Editable.styles';
import axios from 'axios';

export default function Editable ({ children, text, textKey, callBack }) {

  const [edit, setEdit] = useState(false);
  const [editableValue, setEditableValue] = useState(text);
  const inputRef = useRef();

  useEffect(() => setEditableValue(text), [text])
  useEffect(() => edit && inputRef.current.focus(), [edit])

  const onBlur = async () => {
    if (!confirm('Salvar alteração?')) { 
      setEditableValue(text) 
    } else { await axios.put("http://localhost:3000/api/textos", { textKey, text: editableValue, editedBy: 'browser' }).catch((err) => console.log(err)) }
    return setEdit(false)
  }

  return (
    <S.Editable>
      <S.EditableButtons>
        <S.EditButton onClick={() => {setEdit(!edit)}}>{ edit ? 'S' : 'E' }</S.EditButton>
        { edit && <S.CancelButton onClick={() => { setEditableValue(text); setEdit(false)}}>C</S.CancelButton> }
      </S.EditableButtons>
      { cloneElement(children, {  edit,  ref: inputRef, value: editableValue,  onChange: ({ target }) => setEditableValue(target.value), onBlur })}
    </S.Editable>
  )
}