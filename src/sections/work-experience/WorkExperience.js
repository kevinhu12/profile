import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import AboutMe from './AboutMe';
import Job from './Job';
import Section from '../../shared/Section';
import WorkTimeline from './WorkTimeline';
import { jobs } from './constants';

// Component (section): displays the Work Experience section
const WorkExperience = ({

}) => {
    const theme = useTheme();
    
    return (
        <Section background='primary'>
            <Grid container spacing={2} sx={{ overflow: 'hidden' }}>

                <Grid xs={12}>
                    <AboutMe theme={theme} />
                </Grid>

                <Grid xs={12} sx={{ mt: 6 }}>
                    <Typography 
                        color={theme.palette.titles.orange}
                        variant='h4'
                        sx={{ fontWeight: 'bold' }}
                    >
                        Work Experience
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
                <WorkTimeline
                    jobs={jobs}
                    theme={theme}
                />
                {/* </Grid> */}
            </Grid>
        </Section>
    );
}

export default WorkExperience;
