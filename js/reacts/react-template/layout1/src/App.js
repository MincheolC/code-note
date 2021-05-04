import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import SideBar from './layouts/SideBar';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ea684b',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SideBar />
    </ThemeProvider>
  );
}

export default App;
