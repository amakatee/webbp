import '../styles/globals.css'
import Layout from '../components/Layout'
import { ThemeProvider} from '@mui/material'
import {createTheme} from '@mui/material'
import { teal } from '@mui/material/colors'

export const theme = createTheme({
  palette: {
    secondary: {
      main: teal['A400'],
    }
  }
})


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
    <Layout>
      <Component {...pageProps} />
   </Layout>
   </ThemeProvider>
  )
}

export default MyApp
