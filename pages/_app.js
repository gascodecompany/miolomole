import { ThemeProvider } from 'styled-components';
import { mioloMoleAppTheme } from '../styles/global';
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../styles/globals.css'
import LoginButton from '../components/LoginButton';
import { useState } from 'react';
import LoginModal from '../components/LoginModal/LoginModal';

function MyApp({ Component, pageProps }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const modalProps = { isLoginModalOpen, setIsLoginModalOpen }

  return (
    <ThemeProvider theme={mioloMoleAppTheme}>
      <Header/>
      <LoginButton {...modalProps} />
      <LoginModal {...modalProps} />
      <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>
  )
}

export default MyApp
