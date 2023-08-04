import Home from './dashboard/Home';
import React from 'react';
import theme from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

function App() {
    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Home />
            </ThemeProvider>
        </>
    );
}

export default App;
