import React from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import CustomIcon from '../../shared/CustomIcon';

// Component: displays a language section -------------------------------------
const LanguageSection = ({
    language,
    theme
}) => (
    <Grid container>

        {/* Language info (icon, name, description) */}
        <Grid xs={12}>
            <Stack direction='row' alignItems='center'>
                <CustomIcon image={language.icon} />
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

        {/* Framework info */}
        <Grid xs={12} sx={{ mt: 1 }}>
            <List dense={true}>
                {language.frameworks.map((framework) => (
                    <ListItem disableGutters>
                        <CustomIcon image={framework} />
                        <ListItemText 
                            primary={framework.name} 
                            primaryTypographyProps={{ color: 'primary' }}
                            sx={{ ml: 1 }} 
                        />
                    </ListItem>
                ))}
            </List>
        </Grid>
    </Grid>
);

export default LanguageSection;
