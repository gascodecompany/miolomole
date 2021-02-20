import { ThemeProvider } from 'styled-components';
import { mioloMoleAppTheme } from '../styles/global';
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider theme={mioloMoleAppTheme}>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>
  )
}

export default MyApp
