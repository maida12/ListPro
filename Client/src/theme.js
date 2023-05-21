import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
  palette: {
    primary: {
      main: '#891180;',
      light: '#891180',
      dark: '#891180',
      contrastText: '#fff',
    },
    secondary: {
      main: '#891180;',
      light: '#891180',
      dark: '#891180',
      contrastText: '#fff',
    },

    overrides: {
        MuiButton: {
          raisedPrimary: {
            color: 'black',
          },
        },
      }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: ' #891180;',
          // backgroundColor: '#F5F5F6',
        },
      },
    },
  },
})

theme = responsiveFontSizes(theme)

export default theme