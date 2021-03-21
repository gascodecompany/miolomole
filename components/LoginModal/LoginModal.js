import * as S from './LoginModal.style'
import Form from '../../Elements/Form'
import { useState } from 'react';
import { loginModalFieldsState, loginModalFieldsFunction, gridTemplate } from './LoginModal.constants';
import Button from '../../Elements/Button';
import axios from 'axios';
import { useEffect } from 'react';


export default function LoginModal({isLoginModalOpen, setIsLoginModalOpen}){
  const [ fields, setFields ] = useState(loginModalFieldsState);
  const [ response, setResponse ] = useState();
  const [ message, setMessage ] = useState()
  const loginModalFields = loginModalFieldsFunction({ fields, setFields })

  const handleLogin = async () => {
    await axios
      .post(`${process.env.url}/api/login`, { 
        userName: fields.userName.value, 
        password: fields.password.value 
      }).then((res) => setResponse(res))
        .catch((err) => setResponse(err.response))
  }

  useEffect(() => {
    switch (response?.status) {
      case 404:
        setMessage("Usuário não encontrado!")
        break;
      case 401:
        setMessage("Usuário ou senha incorreta!")
        break;
      case 200:
        setMessage("Login realizado com sucesso!")
        break;
      default:
        break;
    }
    setResponse('')
  }, [response])

  const formProps = {
    gridTemplate,
    fields: loginModalFields,
    setFields
  }

  if(isLoginModalOpen) {
    return(
      <S.LoginModalContainer isOpen={isLoginModalOpen}>
        <S.LoginModalBody>
          <S.Close className="unselectable" onClick={() => setIsLoginModalOpen(!isLoginModalOpen)}>+</S.Close>
          <S.FormWrapper>
            <S.FormTitleWrapper>
              <S.Title>Login</S.Title>
              <S.SubTitle>*Somente para administradores</S.SubTitle>
            </S.FormTitleWrapper>
            <Form {...formProps} />
            <S.Response>{message}</S.Response>
            <Button label='Entrar' variation='primary' onClick={() => handleLogin()}/>
          </S.FormWrapper>
        </S.LoginModalBody>
      </S.LoginModalContainer>
    )
  } else return true
}