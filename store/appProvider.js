import { useRouter } from 'next/router';
import { useContext, createContext, useState, useEffect } from 'react'

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [lastRoute, setLastRoute] = useState(0);
  const router = useRouter();
  
  const handleLogout = () => { setIsLoggedIn(false); localStorage.removeItem('token') };

  useEffect(() => setLastRoute(lastRoute + 1), [router.asPath])
  
  // useEffect(() => {
  //   let token;
  //   if (typeof window !== "undefined") { token = localStorage.getItem('token') };
  //   if (token){
  //     axios.get(`${process.env.API_URL}get-current-user`, { params: { token } })
  //       .then((res) => { console.log(res) })
  //       .catch(() => handleLogout());
  //   } else { handleLogout() };
  // }, []);
  
  const modalProps = { isLoginModalOpen, setIsLoginModalOpen };
  const routeProps = { lastRoute };
  const userProps = { isLoggedIn, setIsLoggedIn, handleLogout, ...currentUser, setCurrentUser };

  const contextProps = { ...modalProps, ...userProps, ...routeProps }

  return (
    <AppContext.Provider value={contextProps}>
      {children}
    </AppContext.Provider>
  );
} 

export const useAppProvider = () => useContext(AppContext)