import { createTheme } from '@mui/material/styles';

// Create the app theme
const theme = createTheme({
    palette: {
        background: {
            primary: '#051014',
            secondary: '#333333',
            navbar: '#E33E7F'
        },
        primary: { main: '#FFFFFF' }, // White
        secondary: { main: '#cddddd' } // Blue-ish gray
    },
    spacingValues: {
        box: 1
    }
});

export default theme;
