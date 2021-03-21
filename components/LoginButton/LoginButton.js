import EditLockIcon from '../../images/js/EditLockIcon'
import * as S from './LoginButton.style'

export default function LoginButton({isLoginModalOpen, setIsLoginModalOpen}){
  
  return (
    <S.LoginContainer>
      <S.LoginWrapper onClick={() => setIsLoginModalOpen(!isLoginModalOpen)}>
        <EditLockIcon />
      </S.LoginWrapper>
    </S.LoginContainer>
  )
}