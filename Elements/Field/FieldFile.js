// import React, { useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';
// import { StyledDropzone } from '../../Elements/Field/Field.style';
// import { UPLOAD_FILE } from "../../helpers/mutations";
// import { useMutation } from '@apollo/react-hooks';
// import { inputChange } from '../../helpers/fieldFunctions';
// import Spinner from '../../Components/Spinner/Spinner'

// export default function FieldFile({field, ...fieldObj}) {
//   // const { placeholder, value, name } = field;
//   const [upload, { loading } ] = useMutation(UPLOAD_FILE);

//   const linkProps = { onClick: (e) => e.stopPropagation(), href: value, target: "_blank", rel: "noopener noreferrer", download: true,}

//   const onDrop = useCallback(acceptedFiles => {
//     const variables = { file: acceptedFiles };
//     upload({ variables })
//       .then(res => inputChange({ ...fieldObj, field, target: { value: res.data.uploadFile } }))
//       .catch(err => console.log(err))
//   }, [fieldObj, upload, field]);

//   const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({onDrop});


//   return (

//     <StyledDropzone {...getRootProps({isDragActive, isDragAccept, isDragReject} )} {...field}>
//         <input {...getInputProps()}/>

//       {value
//         ? name === "coverURL"  ?  <img src={value} alt={name}/> :  <a {...linkProps}>Ver conteúdo</a>

//         : loading ?
//         <>
//           <Spinner color="#fbb040"/>
//         </>

//         : <p>{placeholder}</p>
//       }

//     </StyledDropzone>

//   );
// }
