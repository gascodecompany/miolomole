import { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Slider from 'react-slick';
import * as S from './BlogEditor.style'

export default function BlogEditor(props){
  const initialValue = props?.nodes?.value ? props?.nodes?.value : EditorState.createEmpty('');
  const [editorState, onEditorStateChange] = useState(EditorState.createEmpty(''));

  return (
    <S.BlogEditor>
      <Editor editorState={editorState} onEditorStateChange={onEditorStateChange}/>
    </S.BlogEditor>
  )
}








