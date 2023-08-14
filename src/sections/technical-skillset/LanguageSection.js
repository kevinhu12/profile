// Imports
import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

// Component for a single language
const LanguageSection = ({
    language
}) => (
    <Grid container>
        <Grid xs={12}>
            <Stack direction='row' alignItems='center'>
                <Box
                    alt='My picture'
                    component='img'
                    src={language.icon}
                    sx={{ height: 45, width: 40 }}
                />
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
        <Grid xs={12} sx={{ mt: 1 }}>
            <List dense={true}>
                {language.frameworks.map((framework) => (
                    <ListItem>
                        {/* <ListItemAvatar>
                            <Avatar>
                                <Icon />
                            </Avatar>
                        </ListItemAvatar> */}
                        <ListItemText primary={framework.name} primaryTypographyProps={{ color: 'primary' }} />
                    </ListItem>
                ))}
            </List>
        </Grid>
    </Grid>
);

export default LanguageSection;