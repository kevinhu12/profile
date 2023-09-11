import React from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import HobbyCard from './HobbyCard';
import Section from '../../shared/Section';
import { hobbies, sizes } from './constants';

// Component: hobby section
const Hobbies = ({

}) => {
    const theme = useTheme();
    
    return (
        <Section background='tertiary'>
            <Typography
                align='center'
                color={theme.palette.titles.orange}
                variant='h4'
                sx={{ fontWeight: 'bold' }}
            >
                Hobbies
            </Typography>
            <Typography
                align='center'
                color='primary'
                variant='h5'
                sx={{ mt: 2 }}
            >
                Some things I do for fun in my spare time!
            </Typography>
            <Box display='flex' flexDirection='column' alignItems='center'>
                {hobbies.map((hobby) => (
                    <motion.div
                        initial={{ y: 300 }}
                        whileInView={{ y: 0, transition: { type: 'spring', bounce: 0.4, duration: 1 }}}
                        viewport={{ once: true }}
                        style={{ marginTop: '2rem' }}
                    >
                        <HobbyCard
                            hobby={hobby}
                            sizes={sizes}
                            theme={theme}
                        />
                    </motion.div>
                ))}
            </Box>
        </Section>
    );
}

export default Hobbies;
