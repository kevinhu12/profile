import { createTheme } from '@mui/material/styles';

// Create the app theme
const theme = createTheme({
    typography: {
        fontFamily: [
            'Roboto'
        ]
    },
    palette: {
        background: {
            // primary: '#051014', // white
            // secondary: '#333333', // dark gray
            // // navbar: '#E33E7F',
            // transition: '#FFF3E4', // beige
            // tertiary: '#ACBDBA', // ash gray
            // quatanary: '#FFFFFF', // white
            primary: '#efe4dc', // beige
            secondary: '#ffffff', // champagne pink
            tertiary: '#acbdba', // ash gray
            quatanary: '#ffffff', // white
        },
        // primary: { main: '#FFFFFF' }, // white
        // secondary: { main: '#cddddd' }, // blue-ish gray
        // tertiary: { main: '#000000' }, // black
        primary: { main: '#000000' }, // black
        secondary: { main: '#ffffff' } // white
    },
    sectionSpacing: {
        horizontal: 1,
        vertical: 100,
        default: 0
    }
});

export default theme;
