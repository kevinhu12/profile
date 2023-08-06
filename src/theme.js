import { createTheme } from '@mui/material/styles';

// Create the app theme
const theme = createTheme({
    palette: {
        background: {
            default: '#043565',
            navbar: '#E33E7F'
        },
        primary: {
            main: '#FFFFFF'
        },
    },
    spacingValues: {
        box: 1
    }
});

export default theme;
