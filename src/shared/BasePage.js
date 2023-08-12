// Imports
import React from 'react';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import { Navbar } from './Navbar';
import Home from '../sections/Home';
import TechnicalSkills from '../sections/TechnicalSkills';
import Transition from '../sections/Transition';
import WorkExperience from '../sections/WorkExperience';

// Styled components

// Main component
const BasePage = ({

}) => {
    const theme = useTheme();
    
    return (
        <Container maxWidth={false} style={{ background: theme.palette.background.primary }}>
            <Navbar />
            <Home />
            <WorkExperience />
            <Transition />
            <TechnicalSkills />
        </Container>
    );
}

export default BasePage;
