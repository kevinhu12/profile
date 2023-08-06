// Imports
import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

// Styled components

// Main component
const Home = ({

}) => {
    const theme = useTheme();
    
    return (
        <Box sx={{ p: theme.spacingValues.box }}>
            <Grid container spacing={2}>
                <Grid xs={5}>
                    <Typography color='primary'>Photo here</Typography>
                </Grid>
                <Grid xs={7}>
                    <Typography>Description here</Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Home;
