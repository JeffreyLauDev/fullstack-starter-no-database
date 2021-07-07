import React from 'react';
import routes from 'src/routes';
import { useRoutes } from 'react-router-dom';
import MessageBox from 'src/components/MessageBox';
import { ThemeProvider } from '@material-ui/core/styles';
import { MessageProvider } from './context/MessageBoxContext';
import theme from 'src/theme';
const App = () => {
  const routing = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      <MessageProvider>
        {routing}
        <MessageBox />
      </MessageProvider>
    </ThemeProvider>
  );
}

export default App;