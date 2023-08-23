import { createTheme } from '@mui/material/styles';

// Create the app theme
const theme = createTheme({
    palette: {
        background: {
            primary: '#051014', // white
            secondary: '#333333', // dark gray
            // navbar: '#E33E7F',
            transition: '#FFF3E4', // beige
            tertiary: '#ACBDBA', // ash gray
            quatanary: '#FFFFFF', // white
        },
        primary: { main: '#FFFFFF' }, // white
        secondary: { main: '#cddddd' }, // blue-ish gray
        tertiary: { main: '#000000' }, // black
    },
    spacingValues: {
        box: 1
    }
});

export default theme;
