import { createTheme } from '@mui/material/styles';

// Create the app theme
const theme = createTheme({
    palette: {
        background: {
            primary: '#051014',
            secondary: '#333333',
            navbar: '#E33E7F'
        },
        primary: {
            main: '#FFFFFF'
        },
        secondary: {
            main: '#cddddd'
        }
    },
    spacingValues: {
        box: 1
    }
});

export default theme;
