// Imports
import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import testimg from '../images/react-logo.png';

// Styled components

// Main component
const Home = ({

}) => {
    const theme = useTheme();
    
    return (
        <Box sx={{ p: theme.spacingValues.box }}>
            <Grid container spacing={2}>
                <Grid xs={5} sx={{ background: theme.palette.background.primary }}>
                    <Typography color='primary'>
                        <Box
                            alt='My picture'
                            component='img'
                            src={testimg}
                            sx={{ height: 600, width: 600 }}
                        />
                    </Typography>
                </Grid>
                <Grid xs={7} sx={{ background: theme.palette.background.secondary }}>
                    <Typography color='secondary'>
                        Description here <br />
                        a <br />
                        a <br />
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Home;
