import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react/cjs/react.development';
import { useRouter } from 'next/router';

export function appWrapper() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [lastRoute, setLastRoute] = useState(0);
  const router = useRouter()
  
  const [isLogedIn, setIsLogedIn] = useState(true);
  
  useEffect(() => {
    setLastRoute(lastRoute + 1)
  }, [router.asPath])
  
  useEffect(() => {
    let token
    if (typeof window !== "undefined") { token = localStorage.getItem('token') }
    if(token){
      axios.get(`${process.env.url}/api/get-current-user`, { params: { token } })
        .then((res) => setCurrentUser(res.data.user))
        .catch(() => { setIsLogedIn(false); localStorage.removeItem('token')});
    } else { setIsLogedIn(false) }
  }, [])
  
  const modalProps = { isLoginModalOpen, setIsLoginModalOpen };
  const routeProps = { lastRoute };
  const userProps = { isLogedIn, setIsLogedIn, ...currentUser, setCurrentUser };

  return { modalProps, userProps, routeProps }
}
