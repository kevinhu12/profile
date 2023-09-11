import React from 'react';
import { motion } from 'framer-motion';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import LanguageCard from './LanguageCard';
import Section from '../../shared/Section';
import SummaryCard from './SummaryCard';
import {
    featuredLanguages,
    otherLanguages
} from './constants';

// Component: displays the languages and frameworks section
const TechnicalSkills = ({

}) => {
    const theme = useTheme();
    
    return (
        <Section background='secondary'>
            <Grid container spacing={2} sx={{ overflow: 'hidden' }}>

                {/* Section header */}
                <Grid xs={12}>
                    <Typography
                        align='center' 
                        color={theme.palette.titles.blue}
                        variant='h4'
                        sx={{ fontWeight: 'bold' }}
                    >
                        Languages and Frameworks
                    </Typography>
                    <Typography
                        align='center'
                        color='secondary'
                        variant='h5'
                        sx={{ mt: 2, mb: 2 }}
                    >
                        Throughout my university courses and previous work experiences, 
                        I have been introduced to—and familiarized myself with—a wide variety 
                        of programming languages. Here are some of my favourite ones, as well 
                        as the frameworks and libraries that I have used alongside them.
                    </Typography>
                </Grid>

                {/* Featured Languages */}
                <Grid 
                    xs={12}
                    md={5}
                    display='flex' 
                    flexDirection='column' 
                    justifyContent='center' 
                    alignItems='center'
                >
                    {featuredLanguages.map((language, i) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ ease: [0,0.71,0.2,1.01], duration: 0.8, delay: 0.1 }}
                        >
                            <LanguageCard 
                                language={language}
                                disableTopPadding={i === 0}
                                theme={theme}
                            />
                        </motion.div>
                    ))}
                </Grid>

                {/* Aptitude Meter */}
                <Grid 
                    xs={12}
                    md={7}
                    display='flex'
                    justifyContent='center'
                >
                    <SummaryCard languages={otherLanguages} theme={theme} />
                </Grid>

            </Grid>
        </Section>
    );
}

export default TechnicalSkills;
