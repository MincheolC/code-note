import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import React from 'react'

const CThemeProvider: React.FC<React.ReactNode> = (props) => {
  const cTheme = {
    typography: {
      fontFamily: '"Spoqa Han Sans Neo", "sans-serif"',
    },
  }
  return (
    <ThemeProvider theme={createMuiTheme(cTheme)}>
      {props.children}
    </ThemeProvider>
  )
}

export default CThemeProvider
