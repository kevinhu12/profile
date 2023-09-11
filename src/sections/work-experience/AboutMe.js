import React from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { jobs, sizes } from './constants';
import headshot from '../../images/headshot.jpg';

const AboutMe = ({
    theme
}) => (
    <Grid container>
        <Grid item xs={4} display='flex' justifyContent='right' sx={{ pr: '2rem' }}>
            <Avatar
                alt='Kevin Hu'
                src={headshot}
                sx={{ width: sizes.avatar, height: sizes.avatar, border: '0.2rem solid #ffffff' }}
            />
        </Grid>
        <Grid item xs={8} display='flex' flexDirection='column' justifyContent='center'>
            <Typography color='primary' variant='h5' sx={{ mb: 2 }}>
                My name is Kevin Hu, and I'm a third-year Computer Science student studying at the University of Waterloo.
            </Typography>
            <Typography color='primary' variant='h5' sx={{ mb: 2 }}>
                I'm a fast learner who's passionate about writing good code, strengthening my programming arsenal, and working with new technologies.
            </Typography>
            <Typography color='primary' variant='h5' sx={{ mb: 2 }}>
                Currently, I'm seeking an internship for Winter 2024!
            </Typography>
        </Grid>
    </Grid>
);

export default AboutMe;
