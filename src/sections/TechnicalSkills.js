// Imports
import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import AddCircleIcon from '@mui/icons-material/AddCircle'

// Constants
const languages = [
    {
        name: 'C#',
        description: 'My language of choice!',
        icon: 'placeholder'
    },
    {
        name: 'JavaScript & TypeScript',
        description: 'idk',
        icon: 'placeholder'
    }
];

// Component for a single language
const Language = ({
    language
}) => (
    <Grid container>
        <Grid xs={12}>
            <Stack direction='row' alignItems='center'>
                <AddCircleIcon />
                <Typography color='secondary' variant='h6'>
                    {language.name}
                </Typography>
            </Stack>
        </Grid>
        <Grid xs={12}>
            <Typography color='secondary' variant='body2'>
                {language.description}
            </Typography>
        </Grid>
    </Grid>
);

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
                    <Typography color='primary' variant='body1'>
                        My most familiar languages, and the frameworks that accompany them.
                    </Typography>
                </Grid>
                <Grid xs={4}>
                    <Language
                        language={languages[0]}
                    />
                </Grid>
                <Grid xs={4}>
                    <Language
                        language={languages[1]}
                    />
                </Grid>

                <Grid xs={12}>
                    <Typography color='primary' variant='h5'>
                        Tools and Database Management
                    </Typography>
                    <Typography color='primary' variant='body1'>
                        Some databases and general coding tools I have used
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
