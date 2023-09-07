import { createTheme } from '@mui/material/styles';

// Create the app theme
const theme = createTheme({
    typography: { 
        fontFamily: ['League Spartan', 'regular'].join(',')
    },
    palette: {
        background: {
            primary: '#efe4dc', // beige
            secondary: '#ffffff', // champagne pink
            tertiary: '#acbdba', // ash gray
            quatanary: '#ffffff', // white
        },
        text: {
            primary: '#ffffff', // white
            secondary: '#000000', // black
        },
        primary: { main: '#000000' }, // black
        secondary: { main: '#ffffff' } // white
    },
    sectionSpacing: {
        horizontal: 50,
        vertical: 100,
        default: 0
    }
});

export default theme;
