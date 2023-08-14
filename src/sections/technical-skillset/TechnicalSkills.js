// Imports
import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import LanguageSection from './LanguageSection';
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
                    <Typography color='primary' variant='body1' sx={{ mt: 3 }}>
                        {descriptions.additionalLanguages}
                    </Typography>
                    <List dense={true}>
                        {/* TODO: Make a shared component for the icons + list stuff */}
                        {additionalLanguages.map((language) => (
                            <ListItem>
                                {/* <ListItemAvatar>
                                    <Avatar>
                                        <Icon />
                                    </Avatar>
                                </ListItemAvatar> */}
                                <ListItemText primary={language} primaryTypographyProps={{ color: 'primary' }} />
                            </ListItem>
                        ))}
                    </List>
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
                    <List dense={true}>
                        {databases.map((database) => (
                            <ListItem>
                                {/* <ListItemAvatar>
                                    <Avatar>
                                        <Icon />
                                    </Avatar>
                                </ListItemAvatar> */}
                                <ListItemText primary={database} primaryTypographyProps={{ color: 'primary' }} />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid xs={6}>
                    <Typography color='secondary' variant='h6'>
                        Version Control Tools
                    </Typography>
                    <List dense={true}>
                        {tools.map((tool) => (
                            <ListItem>
                                {/* <ListItemAvatar>
                                    <Avatar>
                                        <Icon />
                                    </Avatar>
                                </ListItemAvatar> */}
                                <ListItemText primary={tool} primaryTypographyProps={{ color: 'primary' }} />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                
            </Grid>
        </Box>
    );
}

export default TechnicalSkills;
