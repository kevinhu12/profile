import BasePage from './shared/BasePage';
import React from 'react';
import theme from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

function App() {
    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <BasePage />
            </ThemeProvider>
        </>
    );
}

export default App;
