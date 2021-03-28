import { ThemeProvider } from 'styled-components';
import { mioloMoleAppTheme } from '../styles/global';
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../styles/globals.css'
import LogoutButton from '../components/LogoutButton';
import { appWrapper } from './appProvider';

function MyApp({ Component, pageProps }) {
  const { userProps } = appWrapper();
  const { isLogedIn } = userProps;

  return (
    <ThemeProvider theme={mioloMoleAppTheme}>
      <Header/>
      { isLogedIn && <LogoutButton {...userProps} /> }
      <Component {...pageProps} {...userProps}/>
      <Footer/>
    </ThemeProvider>
  )
}

export default MyApp;
