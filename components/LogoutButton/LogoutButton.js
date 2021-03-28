import EditLockIcon from '../../images/js/EditLockIcon';
import Lottie from 'react-lottie';
import * as S from './LogoutButton.style';
import animationData from '../../lotties/log-out.json';
import { useState } from 'react/cjs/react.development';

export default function LogoutButton({setCurrentUser, setIsLogedIn}){
  const [paused, setPaused] = useState(true)

  const defaultOptions = {
    animationData: animationData,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <S.LogoutContainer>
      <S.LogoutWrapper 
        onClick={() => {setCurrentUser(''); setIsLogedIn(false)}} 
        onMouseEnter={() => setPaused(false)}
        onMouseLeave={() => setPaused(true)}
      >
        <Lottie
          options={defaultOptions}
          height={70}
          width={70}
          isPaused={paused}
         />
      </S.LogoutWrapper>
    </S.LogoutContainer>
  )
}