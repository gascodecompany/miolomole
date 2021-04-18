import { ThemeProvider } from 'styled-components';
import { mioloMoleAppTheme } from '../styles/global';
import Footer from "../components/Footer";
import Header from "../components/Header";
import LogoutButton from '../components/LogoutButton';
import { AppProvider } from '../store/appProvider';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider theme={mioloMoleAppTheme}>
      <AppProvider>
        <Header/>
        <LogoutButton />
        <Component {...pageProps} />
        <Footer/>
      </AppProvider>
    </ThemeProvider>
  )
}

export default MyApp;
