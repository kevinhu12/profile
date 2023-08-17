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

import { itemData } from './constants';
import { Parallax } from 'react-scroll-parallax';

// Main component
const AboutMe = ({

}) => {
    const theme = useTheme();
    
    return (
        <Box sx={{ p: theme.spacingValues.box, background: theme.palette.background.primary }}>
            <Typography color='secondary' variant='subtitle2' sx={{ 
                backgroundColor: theme.palette.background.primary,
                position: '-webkit-sticky',
                    position: 'sticky',
                    top: 0,
                    zIndex: 10
            }}>
                ABOUT ME
            </Typography>

            <Typography color='tertiary' variant='body1'
                sx={{
                    position: 'absolute',
                    translate: { y: -10 },
                    zIndex: 9,
                    mt: 18
                }}
            >
                Test text
            </Typography>
            <ImageList variant='masonry' cols={5} gap={8}>
                {itemData.map((img, idx) => (
                    <ImageListItem key={idx}>
                        <img
                            src={`${img.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${img.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={img.title}
                            loading='lazy'
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

export default AboutMe;
