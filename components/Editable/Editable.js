import { useState, useEffect, cloneElement, useRef } from 'react';
import * as S from './Editable.styles';
import axios from 'axios';
import EditIcon from '../../images/js/EditIcon'

export default function Editable ({ children, page, texts, textKey, isLoggedIn }) {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(texts[textKey] || 'Insira um conteúdo');
  const [newText, setNewText] = useState(texts[textKey] || 'Insira um conteúdo');
  const ref = useRef();

  useEffect(() => edit && ref.current.focus(), [edit])

  const onChange = ({ target }) => setNewText(target.value)
  const onBlur = (e) => {
    if(!(e.relatedTarget?.id === `${textKey}EditButton` || e.relatedTarget?.id === `${textKey}CancelButton`)) {
      if (!confirm('Salvar alteração?')) { setNewText(text); setEdit(false) } else { saveText() }
    }
  }
  const saveText = async () => {
    await axios.put("http://localhost:3000/api/textos", { textKey, page, text: newText, editedBy: 'browser' }).catch((err) => console.log(err))
    setText(newText)
    setEdit(false)
  }

  const inputProps = { value: newText, ref, edit, onChange, onBlur, styles: children.type.componentStyle.rules }

  return (
    <S.Editable>
      { !isLoggedIn && (
        <S.EditableButtons>
          <S.EditButton id={`${textKey}EditButton`} onClick={() => edit ? saveText() : setEdit(true)}>{ edit ? <S.SavedIcon/> : <EditIcon/> }</S.EditButton>
          { edit && <S.CancelButton id={`${textKey}CancelButton`} onClick={() => { setNewText(text); setEdit(false)}}></S.CancelButton> }
        </S.EditableButtons>
      )}
      { edit ? <S.EditableInput {...children.props} {...inputProps}/> : cloneElement(children, Object.assign({}, {...children.props, children: newText})) }
    </S.Editable>
  )
}

