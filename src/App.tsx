import React from 'react';
import {QueryClient, QueryClientProvider} from "react-query";
import {createTheme, CssBaseline, Theme, ThemeProvider} from "@mui/material";
import PhonesMap from './Views/PhonesMap';

export const enigmaTrackingPhonesTaskTheme: Theme = createTheme({})

const queryClient = new QueryClient()


const App: React.FC = () => {
    return (
        <ThemeProvider theme={enigmaTrackingPhonesTaskTheme}>
            <CssBaseline/>
            <QueryClientProvider client={queryClient}>
                <PhonesMap/>
            </QueryClientProvider>
        </ThemeProvider>
    );
};

export default App;
