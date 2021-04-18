import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Form from '../../Elements/Form'
import { formDisabled } from '../../helpers/fieldFunctions';
import { loginModalFieldsState, loginModalFieldsFunction, gridTemplate } from './LoginModal.constants';
import * as S from './LoginModal.style'
import { useAppProvider } from '../../store/appProvider';

export default function LoginModal(){
  const { setCurrentUser, setIsLoggedIn, handleLogout } = useAppProvider();
  const [fields, setFields] = useState(loginModalFieldsState);
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState();
  const [formDisabledState, setFormDisabledState] = useState();
  const router = useRouter();

  useEffect(() => {
    setFields((oldFields) => {
      const newFields = {...oldFields};
      newFields.userName.value = '';
      newFields.password.value = '';
      return newFields;
    })
    setMessage('')
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);
    const fieldsArray = Object.entries(fields);
    const { userName, password } = fieldsArray.reduce((obj, item) => ({...obj, [item[0]]: item[1]?.value }), {});
    if ( userName && password ){
      const res = await axios.post(`${process.env.API_URL}login`, { userName, password })
      if(res.status == 200) {
        const user = res.data.user;
        const token = user.token;
        localStorage.setItem("token", token);
        setMessage('Login realizado com sucesso');
        setCurrentUser(user);
        console.log('arrived here')
        setIsLoggedIn(true);
        router.push('/');
      } else {
        const responseError = err.response && err.response.data.message;
        if (responseError) { setMessage(responseError) }
      }
    }
    setLoading(false);
  }

  const loginModalFields = loginModalFieldsFunction({ fields, setFields, onSubmit, loading, formDisabledState })

  useEffect(() => {
    setFormDisabledState(formDisabled(fields))
  }, [fields])

  const formProps = {
    gridTemplate,
    fields: loginModalFields ? loginModalFields : {} ,
    // setFields,
    // onSubmit
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
          <S.Response>{ message ? message : '' }</S.Response>
        </S.FormWrapper>
      </S.LoginModalBody>
    </S.LoginModalContainer>
  )
}