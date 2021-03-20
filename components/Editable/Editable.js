import { useState, useEffect, cloneElement } from 'react';
import * as S from './Editable.styles';

export default function Editable ({ children, value }) {
  const [edit, setEdit] = useState(false);
  const [editableValue, setEditableValue] = useState(value);

  useEffect(() => setEditableValue(value), [value])

  return (
    <S.Editable>
      <S.EditableButtons>
        <S.EditButton onClick={() => setEdit(!edit)} >{ edit ? 'S' : 'E' }</S.EditButton>
        { edit && <S.CancelButton onClick={() => { setEditableValue(value); setEdit(false)}}>C</S.CancelButton> }
      </S.EditableButtons>
      { cloneElement(children, { edit, value: editableValue, onChange: ({ target }) => setEditableValue(target.value) }) }
    </S.Editable>
  )
}