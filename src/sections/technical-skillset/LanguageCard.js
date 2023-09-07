import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CustomIcon from '../../shared/CustomIcon';

// Component: displays a language
const LanguageCard = ({
    language,
    theme
}) => {
    const [selection, setSelection] = useState(null); // track index of selected framework/library

    const handleSelection = (idx) => {
        if (idx === selection) setSelection(null);
        else setSelection(idx);
    };
    
    return (
        <Card sx={{ maxWidth: '34rem', backgroundColor: theme.palette.background.secondary }}>
            <CardContent>

                {/* Name and icon */}
                <Stack direction='row' alignItems='center'>
                    <CustomIcon image={language.icon} />
                    <Typography color='primary' variant='h6'>
                        {language.name}
                    </Typography>
                </Stack>

                {/* Language description */}
                <Typography color='primary' variant='body2'>
                    {language.description}
                </Typography>

                <Grid container>

                    {/* Frameworks and libraries */}
                    <Grid xs={5}>
                        <List dense={true}>
                            {language.frameworks.map((framework, idx) => (
                                <ListItem disableGutters>
                                    <ListItemButton 
                                        selected={idx === selection}
                                        sx={{
                                            borderRadius: '50px'
                                        }}
                                        onClick={() => handleSelection(idx)}
                                    >
                                        <CustomIcon image={framework} />
                                        <ListItemText 
                                            primary={framework.name} 
                                            primaryTypographyProps={{ color: 'primary' }}
                                            sx={{ ml: 1 }} 
                                        />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                    {/* Framework/library description */}
                    {/* MAYBE: add height: 90% to card */}
                    <Grid xs={7} display='flex' justifyContent='center' alignItems='center'>
                        {selection === null ? (
                            <Typography color='primary'>
                                Click on a library or framework to learn more!
                            </Typography>
                        ) : (
                            <Card sx={{ m: 2, backgroundColor: theme.palette.background.primary }}>
                                <Typography color='primary' sx={{ m: 2 }}>
                                    {language.frameworks[selection].description}
                                </Typography>
                            </Card>
                        )}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
};

export default LanguageCard;
