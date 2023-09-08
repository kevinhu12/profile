import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import HobbyCard from './HobbyCard';
import Section from '../../shared/Section';
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
            duration: 1
        }
    }
};

// Component: hobby section
const Hobbies = ({

}) => {
    const theme = useTheme();
    
    return (
        <Section background='tertiary'>
            <Grid container spacing={2}>
                <Grid xs={12} display='flex' justifyContent='center'>
                    <div className='parallelogram' />
                </Grid>

                <Grid xs={12} display='flex' justifyContent='center'>
                    <Typography color={theme.palette.text.primary} variant='h4'>
                        Hobbies
                    </Typography>
                </Grid>

                <Grid xs={12} display='flex' justifyContent='center'>
                    <div className='parallelogram' />
                </Grid>

                {hobbies.map((hobby) => (
                    <Grid xs={12} display='flex' justifyContent='center'>
                        <motion.div
                            variants={cardVariants}
                            initial='offscreen'
                            whileInView='onscreen'
                            viewport={{ once: true }}
                        >
                            <HobbyCard
                                hobby={hobby}
                                theme={theme}
                            />
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Section>
    );
}

export default Hobbies;
