import { useState, useEffect, cloneElement, useRef } from 'react';
import * as S from './Editable.styles';
import axios from 'axios';

export default function Editable ({ children, textKey, page, isLogedIn }) {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(children.props.children);
  const ref = useRef();

  useEffect(() => setText(children.props.children), [children.props.children])
  useEffect(() => edit && ref.current.focus(), [edit])

  const onChange = ({ target }) => setText(target.value)
  const onBlur = async () => {
    if (!confirm('Salvar alteração?')) { 
      setText(children.props.children) 
    } else { await axios.put("http://localhost:3000/api/textos", { textKey, page, text, editedBy: 'browser' })
      .catch((err) => console.log(err)) }
    return setEdit(false)
  }

  console.log("isLogedIn: ", isLogedIn)
  
  const inputProps = { value: text, ref, edit, onChange, onBlur, styles: children.type.componentStyle.rules }
  return (
    <S.Editable>
      <S.EditableButtons>
        { isLogedIn && <S.EditButton onClick={() => {setEdit(!edit)}}>{ edit ? 'S' : 'E' }</S.EditButton>}
        { edit && <S.CancelButton onClick={() => { setText(text); setEdit(false)}}>C</S.CancelButton> }
      </S.EditableButtons>
      { cloneElement(edit ? <S.EditableInput {...children.props} {...inputProps}/> : children, { children: text })}
    </S.Editable>
  )
}