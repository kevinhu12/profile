import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import HobbyCard from './HobbyCard';
import { hobbies } from './constants';
import { motion } from 'framer-motion';

const cardVariants = {
    offscreen: {
        y: 300
    },
    onscreen: {
        y: 0,
        transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 0.8
        }
    }
};

// Component: hobby section
const Hobbies = ({

}) => {
    const theme = useTheme();
    
    return (
        <Box sx={{ p: theme.spacingValues.box, background: theme.palette.background.primary }}>
            <Typography 
                color='secondary' 
                variant='subtitle2' 
                // sx={{ 
                //     backgroundColor: theme.palette.background.primary,
                //     position: '-webkit-sticky',
                //         position: 'sticky',
                //         top: 0,
                //         zIndex: 10
                // }}
            >
                HOBBIES
            </Typography>
            <Grid container>
                {hobbies.map((hobby) => (
                    <Grid xs={4} display='flex' justifyContent='center'>
                        <motion.div variants={cardVariants} initial='offscreen' whileInView='onscreen' viewport={{ once: true }}>
                            <HobbyCard
                                data={hobby}
                                type={hobby.img === undefined ? 'Video' : 'Image'}
                                theme={theme}
                            />
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Hobbies;
