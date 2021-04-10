import * as S from './LoginModal.style'
import Form from '../../Elements/Form'
import { useState } from 'react';
import { loginModalFieldsState, loginModalFieldsFunction, gridTemplate } from './LoginModal.constants';
import axios from 'axios';
import { useEffect } from 'react';
import { formDisabled } from '../../helpers/fieldFunctions';
import { useRouter } from 'next/router';

export default function LoginModal({ setCurrentUser, setIsLoggedIn, handleLogout }){
  const [fields, setFields] = useState(loginModalFieldsState);
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState();
  const [formDisabledState, setFormDisabledState] = useState();
  const router = useRouter()

  useEffect(() => {
    setFields((oldFields) => {
      const newFields = {...oldFields};
      newFields.userName.value = '';
      newFields.password.value = '';
      return newFields;
    })
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);
    const fieldsArray = Object.entries(fields);
    const { userName, password } = fieldsArray.reduce((obj, item) => ({...obj, [item[0]]: item[1].value }), {});
    if ( userName && password ){
      axios.post(`${process.env.API_URL}login`, { userName, password })
        .then((res) => {
          if(res?.status == 200){
            const user = res.data.user
            const token = user.token;
            localStorage.setItem("token", token);
            setMessage('Login realizado com sucesso');
            setCurrentUser(user);
            setIsLoggedIn(true);
            router.push('/');
          }
        })
        .catch((err) => {
          console.log(err.response)
          const responseError = err?.response?.data?.message;
          setMessage(responseError);
        })
        .finally(() => setLoading(false));
    }
    setLoading(false);
  }

  const loginModalFields = loginModalFieldsFunction({ fields, setFields, loading, onSubmit, formDisabledState })

  useEffect(() => {
    setMessage('')
  }, [])

  useEffect(() => {
    setFormDisabledState(formDisabled(fields))
  }, [fields])

  const formProps = {
    gridTemplate,
    fields: loginModalFields,
    setFields,
    onSubmit
  }

  return(
    <S.LoginModalContainer>
      <S.LoginModalBody>
        <S.Close className="unselectable" onClick={() => router.push('/')}>+</S.Close>
        <S.FormWrapper>
          <S.FormTitleWrapper>
            <S.Title>Login</S.Title>
            <S.SubTitle>*Somente para administradores</S.SubTitle>
          </S.FormTitleWrapper>
          <Form {...formProps} />
          <S.Response>{message}</S.Response>
        </S.FormWrapper>
      </S.LoginModalBody>
    </S.LoginModalContainer>
  )
}