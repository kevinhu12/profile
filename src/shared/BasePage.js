// Imports
import React from 'react';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import { Navbar } from './Navbar';
import Hobbies from '../sections/hobbies/Hobbies';
import Home from '../sections/Home';
import TechnicalSkills from '../sections/technical-skillset/TechnicalSkills';
import Transition from '../sections/Transition';
import WorkExperience from '../sections/work-experience/WorkExperience';

import Typography from '@mui/material/Typography'

// Styled components
import { motion, useScroll } from 'framer-motion';
import '../styles.css'

// Main component
const BasePage = ({

}) => {
    const theme = useTheme();

    const { scrollYProgress } = useScroll();
    
    return (
        <Container maxWidth={false} style={{ background: theme.palette.background.primary }}>
            <motion.div 
                className='progress-bar'
                style={{ scaleX: scrollYProgress }} 
            />
            <Navbar />
            <Home />
            <WorkExperience />
            <Transition />
            <TechnicalSkills />
            <Hobbies />
        </Container>
    );
}

export default BasePage;
