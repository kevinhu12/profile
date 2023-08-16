import BasePage from './shared/BasePage';
import React from 'react';
import theme from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
    return (
        <>
            <ParallaxProvider>
                <CssBaseline />
                <ThemeProvider theme={theme}>
                    <BasePage />
                </ThemeProvider>
            </ParallaxProvider>
        </>
    );
}

export default App;
