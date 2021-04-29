import React, { useState, useCallback } from 'react';
import { inputChange } from '../../helpers/fieldFunctions';
import {useDropzone} from 'react-dropzone';
import Evaporate from 'evaporate';
import { v4 as uuidv4 } from 'uuid';
import AWS from "aws-sdk";

export default function InputImage({ placeholder, name, onChange, value, setFields }) {
  const [loading, setLoading] = useState(false);
  const onDrop = useCallback(acceptedFiles => {
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
    console.log(process.env.NEXT_PUBLIC_AWS_KEY, process.env.NEXT_PUBLIC_AWS_BUCKET, process.env.NEXT_PUBLIC_AWS_REGION)
    const evaporateAddConfig = {
      file,
      name: fileName, 
      contentType: file.type,
      complete: (xhr) => { 
        const location = xhr.responseURL.split('?')[0]; 
        onChange ? onChange({ target: { name, value: location }, setFields }) : inputChange({target: { name, value: location }, setFields})        
        setLoading(false);  
      },
      error: (err) => console.error('ERROR', err)
    };
    Evaporate.create(evaporateConfig)
      .then((evaporate) => evaporate.add(evaporateAddConfig, err => console.error('ERROR', err)).catch(err => console.error('ERROR', err)))
  }, []);
  
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  
  return (
    <span {...getRootProps()}>
      <input {...getInputProps()} />
      <img src={value || 'https://placekitten.com/400/400'} />
    </span>
  )
};