import React, { useState, useCallback } from 'react';
import { inputChange } from '../../helpers/fieldFunctions';
import {useDropzone} from 'react-dropzone';
import Evaporate from 'evaporate';
import { v4 as uuidv4 } from 'uuid';
import AWS from "aws-sdk";
import * as S from './Input.style';

export default function InputFile({ placeholder, name, onChange, value, setFields, type }) {
  const [loading, setLoading] = useState(false);
  const onDrop = useCallback((acceptedFiles) => {
    setLoading(true);
    const file = acceptedFiles[0];
    const fileName = `dev/mioloMole/${uuidv4() + file.name}`;
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
      complete: (xhr) => { 
        const location = xhr.responseURL.split('?')[0]; 
        onChange ? onChange({ target: { name, value: location }, setFields }) : inputChange({target: { name, value: location }, setFields})        
        setLoading(false);  
      },
    };
    Evaporate.create(evaporateConfig)
      .then((evaporate) => evaporate.add(evaporateAddConfig))
  }, []);
  
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const contentRender = () => {
    switch (type) {
      case 'video': return <p>Sem componente para renderizar</p>
      case 'audio': return <p>Sem componente para renderizar</p>
      default: return <img src={value} />
    }
  }
  
  return (
    <S.InputFile>
      { value && <button type="button" onClick={() => onChange ? onChange({ target: { name, value: '' }, setFields }) : inputChange({target: { name, value: '' }, setFields}) }>D</button>}
      <span {...getRootProps()}>
        <input {...getInputProps()} />
        {value ? contentRender() : <p>Clique aqui ou arraste um{type === 'image' ? 'a imagem' : ` ${type}`}</p>}
      </span>
    </S.InputFile>
  )
};

