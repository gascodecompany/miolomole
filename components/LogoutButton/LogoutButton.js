import EditLockIcon from '../../images/js/EditLockIcon';
import Lottie from 'react-lottie';
import * as S from './LogoutButton.style';
import animationData from '../../lotties/log-out.json';
import { useState } from 'react/cjs/react.development';

export default function LogoutButton({ isLoggedIn, setCurrentUser, handleLogout }){
  const [paused, setPaused] = useState(true)

  const defaultOptions = {
    animationData: animationData,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  if(isLoggedIn){
    return (
      <S.LogoutContainer>
        <S.LogoutWrapper 
          onClick={ () => { setCurrentUser(''); handleLogout() } } 
          onMouseEnter={() => setPaused(false)}
          onMouseLeave={() => setPaused(true)}
        >
          <Lottie
            options={defaultOptions}
            height={100}
            width={100}
            isPaused={paused}
           />
        </S.LogoutWrapper>
      </S.LogoutContainer>
    )
  } else return <></>
}