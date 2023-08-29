import React from 'react';
import { motion } from 'framer-motion';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import LanguageCard from './LanguageCard';
import Section from '../../shared/Section';
import { 
    additionalLanguages,
    descriptions,
    languages,
    tools
} from './constants';

// Component: displays the languages and frameworks section
const TechnicalSkills = ({

}) => {
    const theme = useTheme();
    
    return (
        <Section>
            <Grid container spacing={2} sx={{ overflow: 'hidden' }}>

                {/* Section header */}
                <Grid xs={12} display='flex' justifyContent='center'>
                    <div className='parallelogram' />
                </Grid>
                <Grid xs={12} display='flex' justifyContent='center'>
                    <Typography color='primary' variant='h4'>
                        Technical Skills
                    </Typography>
                </Grid>
                <Grid xs={12} display='flex' justifyContent='center'>
                    <div className='parallelogram' />
                </Grid>

                {/* Description */}
                <Grid xs={12}>
                    <Typography color='primary' variant='h5'>
                        Languages and Frameworks
                    </Typography>
                    <Typography color='primary' variant='body1' sx={{ mt: 1 }}>
                        {descriptions.languages}
                    </Typography>
                </Grid>

                {/* Languages and Frameworks */}
                {languages.map((language) => (
                    <Grid xs={6} display='flex' justifyContent='center'>
                        <motion.div 
                            initial={{ x: 300 }} 
                            whileInView={{ x: 0, transition: { type: 'sprint', bounce: 0.4, duration: 1 } }}
                        >
                            <LanguageCard language={language} theme={theme} />
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Section>
    );
}

export default TechnicalSkills;
