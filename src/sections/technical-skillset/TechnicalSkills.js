// Imports
import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import LanguageSection from './LanguageSection';
import { 
    descriptions,
    languages 
} from './constants';

// Main component
const TechnicalSkills = ({

}) => {
    const theme = useTheme();
    
    return (
        <Box sx={{ p: theme.spacingValues.box, background: theme.palette.background.primary }}>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <Typography color='secondary' variant='subtitle2'>
                        TECHNICAL SKILLSET
                    </Typography>
                </Grid>
                <Grid xs={4}>
                    <Typography color='primary' variant='h5'>
                        Languages and Frameworks
                    </Typography>
                    <Typography color='primary' variant='body1' sx={{ mt: 1 }}>
                        {descriptions.languages}
                    </Typography>
                </Grid>
                {languages.map((language, idx) => (
                    <Grid xs={4}>
                        <LanguageSection language={language} />
                    </Grid>
                ))}

                <Grid xs={12}>
                    <Typography color='primary' variant='h5'>
                        Tools and Database Management
                    </Typography>
                    <Typography color='primary' variant='body1' sx={{ mt: 1 }}>
                        {descriptions.tools}
                    </Typography>
                </Grid>
                <Grid xs={6}>
                    <Typography color='secondary' variant='h6'>
                        Database
                    </Typography>
                </Grid>
                <Grid xs={6}>
                    <Typography color='secondary' variant='h6'>
                        Version Control Tools
                    </Typography>
                </Grid>
                
            </Grid>
        </Box>
    );
}

export default TechnicalSkills;
