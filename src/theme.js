import { createTheme } from '@mui/material/styles';

// Create the app theme
const theme = createTheme({
    typography: { 
        fontFamily: ['League Spartan', 'regular'].join(',')
    },
    palette: {
        background: {
            primary: '#000000', // black
            secondary: '#efe4dc', // beige
            tertiary: '#2b2d42', // dark blue
            default: '#ffffff' // white
        },
        titles: {
            blue: '#253c78',
            orange: '#ff9b71'
        },
        primary: { main: '#ffffff' }, // white
        secondary: { main: '#000000' } // black
    },
    sectionSpacing: {
        horizontal: 50,
        vertical: 100,
        default: 0
    }
});

export default theme;
