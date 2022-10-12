import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createTheme, CssBaseline, Theme, ThemeProvider } from '@mui/material';
import Home from './Views/Home';
import { AppProvider } from './Context/Context';

export const enigmaTrackingPhonesTaskTheme: Theme = createTheme({});

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <AppProvider>
      <ThemeProvider theme={enigmaTrackingPhonesTaskTheme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
