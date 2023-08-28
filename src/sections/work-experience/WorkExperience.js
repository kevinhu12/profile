import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Job from './Job';
import Section from '../../shared/Section';
import { jobs } from './constants';

// Component (section): displays the Work Experience section
const WorkExperience = ({

}) => {
    const theme = useTheme();
    
    return (
        <Section>
            <Grid container spacing={2} sx={{ overflow: 'hidden' }}>

                <Grid xs={12} display='flex' justifyContent='center'>
                    <div className='parallelogram' />
                </Grid>

                {/* <Grid xs={12} display='flex' justifyContent='center'>
                    <Parallax
                        scale={[0.75, 1.25, 'easeInQuad']}
                    >
                        <Typography color='primary' variant='h4'>
                            Work Experience
                        </Typography>
                    </Parallax>
                </Grid> */}

                <Grid xs={12} display='flex' justifyContent='center'>
                    <Typography color='primary' variant='h4'>
                        Work Experience
                    </Typography>
                </Grid>
                

                <Grid xs={12} display='flex' justifyContent='center'>
                    <div className='parallelogram' />
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
        </Section>
    );
}

export default WorkExperience;
