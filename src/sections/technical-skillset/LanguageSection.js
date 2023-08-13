// Imports
import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import AddCircleIcon from '@mui/icons-material/AddCircle'

// Component for a single language
const LanguageSection = ({
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

export default LanguageSection;