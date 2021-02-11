import { ThemeProvider } from 'styled-components';
import { mioloMoleAppTheme } from '../styles/global';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider theme={mioloMoleAppTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
