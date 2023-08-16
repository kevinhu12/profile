// Imports
import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import Job from './Job';
import { jobs } from './constants';

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
                {/* <Parallax translateX={[-24,100]}> */}
                    <Grid xs={12}>
                        <Typography color='primary' variant='h5'>
                            Some companies that I have previously worked for.
                        </Typography>
                    </Grid>
                {/* </Parallax> */}
                {/* <Grid xs={12} display='flex' flexDirection='row' sx={{ mt: 2 }}> */}
                    {jobs.map((job, idx) => (
                        <Job
                            idx={idx+1}
                            job={job}
                            theme={theme}
                        />
                    ))}
                {/* </Grid> */}
            </Grid>
        </Box>
    );
}

export default WorkExperience;
