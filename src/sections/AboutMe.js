// Imports
import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import AddCircleIcon from '@mui/icons-material/AddCircle'

// Constants

// Main component
const AboutMe = ({

}) => {
    const theme = useTheme();
    
    return (
        <Box sx={{ p: theme.spacingValues.box, background: theme.palette.background.primary }}>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <Typography color='secondary' variant='subtitle2'>
                        ABOUT ME
                    </Typography>
                </Grid>
                <Grid xs={4}>
                    <Typography color='primary' variant='h5'>
                        Hackathons
                    </Typography>
                </Grid>
                <Grid xs={4}>
                    <Typography color='primary' variant='h5'>
                        Athletics
                    </Typography>
                </Grid>
                <Grid xs={4}>
                    <Typography color='primary' variant='h5'>
                        Gaming
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default AboutMe;
