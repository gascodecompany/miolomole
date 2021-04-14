import { ThemeProvider } from 'styled-components';
import { mioloMoleAppTheme } from '../styles/global';
import { appWrapper } from '../utils/appProvider';
import Footer from "../components/Footer";
import Header from "../components/Header";
import LogoutButton from '../components/LogoutButton';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const { userProps } = appWrapper();

  return (
    <ThemeProvider theme={mioloMoleAppTheme}>
      <Header/>
      <LogoutButton {...userProps} />
      <Component {...pageProps} {...userProps} />
      <Footer/>
    </ThemeProvider>
  )
}

export default MyApp;
