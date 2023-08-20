import React from 'react';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Hobbies from '../sections/hobbies/Hobbies';
import Home from '../sections/Home';
import Navbar from './Navbar';
import ProgressBar from './ProgressBar';
import TechnicalSkills from '../sections/technical-skillset/TechnicalSkills';
import Transition from '../sections/Transition';
import WorkExperience from '../sections/work-experience/WorkExperience';

// Component: main page containing all the sections
const BasePage = ({

}) => {
    // TODO: pass theme into child components instead of having each call useTheme
    const theme = useTheme();
    
    return (
        <Container maxWidth={false} style={{ background: theme.palette.background.primary }}>
            <ProgressBar />
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
