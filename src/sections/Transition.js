// Imports
import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import Section from '../shared/Section';

// Main component
const Transition = ({

}) => {
    const theme = useTheme();
    
    return (
        <Section>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <Typography color='tertiary' variant='h5'>
                        Cloud
                    </Typography>
                    <Typography color='tertiary' variant='body1'>
                        Here are some of the cloud technologies I have worked with.
                    </Typography>
                </Grid>

                <Grid xs={12}>
                    <Typography color='tertiary' variant='body2'>
                        AWS
                    </Typography>
                    <Typography color='tertiary' variant='body2'>
                        Firebase
                    </Typography>
                </Grid>
                
            </Grid>
        </Section>
    );
}

export default Transition;
