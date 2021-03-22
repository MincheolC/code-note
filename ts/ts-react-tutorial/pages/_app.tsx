import '../styles/globals.css'
import { AppProps } from 'next/app'
import CThemeProvider from '../components/utility/CThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CThemeProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </CThemeProvider>
  )
}