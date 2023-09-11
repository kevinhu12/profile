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
        <Grid 
            item 
            xs={12}
            md={4}
            display='flex'
            justifyContent='center'
            sx={{ pr: '2rem', [theme.breakpoints.down('md')]: { mb: 4 } }}
        >
            <Avatar
                alt='Kevin Hu'
                src={headshot}
                sx={{ width: sizes.avatar, height: sizes.avatar, border: '0.2rem solid #ffffff' }}
            />
        </Grid>
        <Grid
            item
            xs={12}
            md={8}
            display='flex'
            flexDirection='column'
            justifyContent='center'
        >
            <Typography
                color='primary'
                variant='h5'
                sx={{ mb: 2, [theme.breakpoints.down('md')]: { textAlign: 'center' } }}
            >
                My name is Kevin Hu, and I'm a third-year Computer Science student studying at the University of Waterloo.
            </Typography>
            <Typography
                color='primary'
                variant='h5'
                sx={{ mb: 2, [theme.breakpoints.down('md')]: { textAlign: 'center' } }}
            >
                I'm a fast learner who's passionate about writing good code, strengthening my programming arsenal, and working with new technologies.
            </Typography>
            <Typography
                color='primary'
                variant='h5'
                sx={{ mb: 2, [theme.breakpoints.down('md')]: { textAlign: 'center' } }}
            >
                Currently, I'm seeking an internship for Winter 2024!
            </Typography>
        </Grid>
    </Grid>
);

export default AboutMe;
