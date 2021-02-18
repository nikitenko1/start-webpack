import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import createTheme from './theme';
import Routes from './routes';

const App = () => {
  return (
    <ThemeProvider theme={createTheme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
