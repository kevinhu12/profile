import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Grid from '@mui/material/Unstable_Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import CustomIcon from '../../shared/CustomIcon';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const StyledButton = styled(ListItemButton)(({ theme }) => ({
    color: theme.palette.background.primary
}));

const LanguageCard = ({
    language,
    theme
}) => {
    // Track the index of the selected framework/library
    const [selection, setSelection] = useState(null);

    const handleSelection = (idx) => {
        if (idx === selection) setSelection(null);
        else setSelection(idx);
    };
    
    return (
        <motion.div 
            initial={{ x: 300 }} 
            whileInView={{ x: 0, transition: { type: 'sprint', bounce: 0.4, duration: 1.2 } }}
        >
            <Card sx={{ maxWidth: '34rem', backgroundColor: theme.palette.background.secondary }}>
                <CardContent>

                    {/* Name and icon */}
                    <Stack direction='row' alignItems='center'>
                        <CustomIcon image={language.icon} />
                        <Typography color='secondary' variant='h6'>
                            {language.name}
                        </Typography>
                    </Stack>

                    {/* Language description */}
                    <Typography color='secondary' variant='body2'>
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
        </motion.div>
    )
};

export default LanguageCard;
