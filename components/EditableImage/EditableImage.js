import { useState, cloneElement, useCallback } from 'react';
import * as S from './EditableImage.styles';
import axios from 'axios';
import {useDropzone} from 'react-dropzone';
import Evaporate from 'evaporate';
import { v4 as uuidv4 } from 'uuid';
import AWS from "aws-sdk";
import EditIcon from '../../images/js/EditIcon';
import CheckedIcon from '../../images/js/Checked';
import CancelIcon from '../../images/js/CancelIcon';

export default function EditableImage ({ children, page, texts, textKey, isLoggedIn }) {
  const [edit, setEdit] = useState(false);
  const [link, setLink] = useState(texts[textKey] || 'https://placekitten.com/400/400');
  const [newLink, setNewLink] = useState(texts[textKey] || 'https://placekitten.com/400/400');
  const [loading, setLoading] = useState(false);
  
  const onDrop = useCallback(acceptedFiles => {
    setLoading(true);
    const file = acceptedFiles[0];
    const fileName = `${process.env.ENVIROMENT}/mioloMole/${uuidv4() + file.name}`;
    const evaporateConfig = {
      aws_key: process.env.AWS_KEY,
      bucket: process.env.AWS_BUCKET,
      awsRegion: process.env.AWS_REGION,
      awsSignatureVersion: "4",
      computeContentMd5: true,
      signerUrl: `${process.env.API_URL}sign-auth`,
      cryptoMd5Method: data => AWS.util.crypto.md5(data, "base64"),
      cryptoHexEncodedHash256: data => AWS.util.crypto.sha256(data, "hex"),
    };
    const evaporateAddConfig = {
      file,
      name: fileName, 
      contentType: file.type,
      complete: (xhr) => { const location = xhr.responseURL.split('?')[0]; setLoading(false);  setNewLink(location); },
    };
    
    Evaporate.create(evaporateConfig).then((evaporate) => evaporate.add(evaporateAddConfig));
  }, []);
  
  const saveImage = async () => {
    await axios.put("http://localhost:3000/api/textos", { textKey, page, text: newLink, editedBy: 'browser' }).catch((err) => console.log(err));
    setLink(newLink);
    setEdit(false);
  }
  
  const { getRootProps, getInputProps, isDragActive, inputRef } = useDropzone({ onDrop, disabled: !edit });
  const inputProps = { src: newLink, edit, isDragActive, styles: children.type.componentStyle.rules }
  
  return (
    <S.Editable>
      { isLoggedIn && (
        <S.EditableButtons>
          <S.EditButton id={`${textKey}EditButton`} onClick={() => edit ? saveImage() : setEdit(true)}>{ edit ? <CheckedIcon/> : <EditIcon/> }</S.EditButton>
          { edit && <S.CancelButton id={`${textKey}CancelButton`} onClick={() => { setNewLink(link); setEdit(false)}}><CancelIcon/></S.CancelButton> }
        </S.EditableButtons>
      )}
      <span {...getRootProps()}>
        <input {...getInputProps()} />
        { cloneElement(children, Object.assign({}, { ...children.props, ...inputProps })) }
      </span>
    </S.Editable>
  )
};
