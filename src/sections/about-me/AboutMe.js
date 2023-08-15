// Imports
import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import athleticsImg from '../../images/athletics-soccer.JPG';

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

                {/* IDEA: AboutMe is just a paradox scroll section where the background is a collage
                          with different labelled sections (e.g. Athletics, Gaming, etc) */}

                {/* IMPLEMENTATION: using ImageList */}
                {/* <Grid xs={12}>
                    <ImageList>
                        <ImageListItem key={0}>
                            <img
                                src={`${athleticsImg}?w=248&fit=crop&auto=format`}
                                srcSet={`${athleticsImg}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={'soccer'}
                                loading='lazy'
                            />
                            <ImageListItemBar
                                title='Athletics'
                                subtitle='Cool stuff'
                                position='below'
                            />
                        </ImageListItem>
                    </ImageList>
                </Grid> */}

                {/* IMPLEMENTATION: using carousel */}
            </Grid>
        </Box>
    );
}

export default AboutMe;
