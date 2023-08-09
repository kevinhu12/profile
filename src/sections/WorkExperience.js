// Imports
import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import testimg from '../logo512.png';

// Constants
const jobExperience = [
    {
        company: 'SPS Commerce',
        title: 'Software Engineer',
        description: 'Cool stuff'
    },
    {
        company: 'SEH Computer Systems',
        title: 'Software Developer',
        description: 'More cool stuff'
    },
    {
        company: 'Spotwork',
        title: 'Full-stack Developer',
        description: 'Cool stuff'
    },
    {
        company: 'iotum Corporation',
        title: 'QA & Technical Analyst',
        description: 'Cool stuff'
    },
]

// Component for a single job experience
const Job = ({
    idx,
    job,
    theme
}) => (
    <Grid xs={3}>
        <Typography color='secondary' variant='h2'>
            {`0${idx}`}
        </Typography>
        <Typography color='primary' variant='body1'>
            {`${job.company}, ${job.title}`}
        </Typography>
        <Typography color='primary' variant='body2'>
            {`${job.description}`}
        </Typography>
    </Grid>
);

// Main component
const WorkExperience = ({

}) => {
    const theme = useTheme();
    
    return (
        <Box sx={{ p: theme.spacingValues.box, background: theme.palette.background.primary }}>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <Typography color='secondary' variant='subtitle2'>
                        WORK EXPERIENCE
                    </Typography>
                </Grid>
                <Grid xs={12}>
                    <Typography color='primary' variant='h5'>
                        Some companies that I have previously worked for.
                    </Typography>
                </Grid>
                {jobExperience.map((job, idx) => (
                    <Job
                        idx={idx+1}
                        job={job}
                        theme={theme}
                    />
                ))}
            </Grid>
        </Box>
    );
}

export default WorkExperience;
