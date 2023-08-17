// Imports
import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import LanguageCard from './LanguageCard';
import ToolCard from './ToolCard';
import { 
    additionalLanguages,
    databases,
    descriptions,
    languages,
    tools
} from './constants';

// Main component
const TechnicalSkills = ({

}) => {
    const theme = useTheme();
    
    return (
        <Box sx={{ p: theme.spacingValues.box, background: theme.palette.background.primary }}>
            <Grid container spacing={2} sx={{ overflow: 'hidden' }} justifyContent='center'>

                {/* Section header */}
                <Grid xs={12}>
                    <Typography color='secondary' variant='subtitle2'>
                        TECHNICAL SKILLSET
                    </Typography>
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
                        <LanguageCard language={language} theme={theme} />
                    </Grid>
                ))}

                {/* TODO: separate this into its own component */}
                {/* Tools and database section */}
                <Grid xs={12}>
                    <Typography color='primary' variant='h5'>
                        Tools and Database Management
                    </Typography>
                    <Typography color='primary' variant='body1' sx={{ mt: 1 }}>
                        {descriptions.tools}
                    </Typography>
                </Grid>
                <Grid xs={6}>
                    <ToolCard tool={databases} theme={theme} />
                </Grid>
                <Grid xs={6}>
                    <ToolCard tool={tools} theme={theme} />
                </Grid>
                
            </Grid>
        </Box>
    );
}

export default TechnicalSkills;
