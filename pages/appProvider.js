import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react/cjs/react.development';
import { useRouter } from 'next/router';

export function appWrapper() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [lastRoute, setLastRoute] = useState(0);
  const router = useRouter()
  
  const handleLogout = () => { setIsLoggedIn(false); localStorage.removeItem('token') };

  useEffect(() => setLastRoute(lastRoute + 1), [router.asPath])
  
  useEffect(() => {
    let token;
    if (typeof window !== "undefined") { token = localStorage.getItem('token') };
    if (token){
      axios.get(`${process.env.URL}/api/get-current-user`, { params: { token } })
        .then((res) => setCurrentUser(res))
        .catch(() => handleLogout());
    } else { handleLogout() };
  }, []);
  
  const modalProps = { isLoginModalOpen, setIsLoginModalOpen };
  const routeProps = { lastRoute };
  const userProps = { isLoggedIn, setIsLoggedIn, handleLogout, ...currentUser, setCurrentUser };

  return { modalProps, userProps, routeProps }
}
