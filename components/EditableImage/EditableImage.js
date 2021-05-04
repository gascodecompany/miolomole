import { useState, cloneElement, useCallback } from 'react';
import * as S from './EditableImage.styles';
import axios from 'axios';
import {useDropzone} from 'react-dropzone';
import Evaporate from 'evaporate';
import { v4 as uuidv4 } from 'uuid';
import AWS from "aws-sdk";
import Button from '../../Elements/Button';
import { useAppProvider } from '../../store/appProvider';
import BookComponent from '../BookComponent';

export default function EditableImage ({ children, page, texts, textKey, book }) {
  const { isLoggedIn } = useAppProvider();
  const [edit, setEdit] = useState(false);
  let initialLink = (!!texts && !!textKey) && !!texts[textKey] ? texts[textKey] : 'https://placekitten.com/400/400'
  if(book?.images) { initialLink = book.images[0] || 'https://placekitten.com/400/400' }
  const [link, setLink] = useState(initialLink);
  const [newLink, setNewLink] = useState(initialLink);
  const [loading, setLoading] = useState(false);
  
  const onDrop = useCallback(acceptedFiles => {
    setLoading(true);
    const file = acceptedFiles[0];
    const fileName = `dev/mioloMole/${uuidv4()}${file.name}`;
    const evaporateConfig = {
      aws_key: process.env.NEXT_PUBLIC_AWS_KEY,
      bucket: process.env.NEXT_PUBLIC_AWS_BUCKET,
      awsRegion: process.env.NEXT_PUBLIC_AWS_REGION,
      awsSignatureVersion: "4",
      computeContentMd5: true,
      signerUrl: `/api/sign-auth`,
      cryptoMd5Method: data => AWS.util.crypto.md5(data, "base64"),
      cryptoHexEncodedHash256: data => AWS.util.crypto.sha256(data, "hex"),
    };
    const evaporateAddConfig = {
      file,
      name: fileName, 
      contentType: file.type,
      complete: (xhr) => { const location = xhr.responseURL.split('?')[0]; setLoading(false); setNewLink(location); },
      error: (err) => console.error('ERROR', err)
    };
    
    Evaporate.create(evaporateConfig)
      .then((evaporate) => evaporate.add(evaporateAddConfig).catch(err => console.error('ERROR', err)))
      
  }, []);
  
  const saveImage = async () => {
    if(book?.images){
      await axios.put(`/api/livros`, { _id: book._id, images: [newLink] }).catch((err) => console.log(err));
      setLink(newLink);
      setEdit(false);
    } else {
      await axios.put(`/api/textos`, { textKey, page, text: newLink, editedBy: 'browser' }).catch((err) => console.log(err));
      setLink(newLink);
      setEdit(false);
    }
  }
  
  const { getRootProps, getInputProps, isDragActive, inputRef } = useDropzone({ onDrop, disabled: !edit });
  const inputProps = { src: newLink, edit, isDragActive, styles: children.type.componentStyle.rules }
  
  return (
    <S.Editable isLoggedIn={isLoggedIn}>
      { isLoggedIn && (
        <S.EditableButtons>
          <S.EditButton onClick={() => edit ? saveImage() : setEdit(true)}>
            { edit ? <Button id={`${textKey}ConfirmButton`} type="confirm" /> : <Button id={`${textKey}EditButton`} type="edit" /> }
          </S.EditButton>
          { edit && <Button id={`${textKey}CancelButton`} onClick={() => { setNewLink(link); setEdit(false)}} type="cancel" /> }
        </S.EditableButtons>
      )}
      <span {...getRootProps()}>
        <input {...getInputProps()} />
        { cloneElement(children, Object.assign({}, { ...children.props, ...inputProps })) }
      </span>
    </S.Editable>
  )
};
