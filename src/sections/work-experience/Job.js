// Imports
import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

// Component for a single job experience
const Job = ({
    idx,
    job,
    theme
}) => (
    <Grid xs={3}>
        <Typography color='primary' variant='h2'>
            {`0${idx}`}
        </Typography>
        <Typography color='primary' variant='body1'>
            {`${job.company}, ${job.title}`}
        </Typography>
        <Typography color='primary' variant='body2' sx={{ mt: 1 }}>
            {`${job.description}`}
        </Typography>
    </Grid>
);

export default Job;