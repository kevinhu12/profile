import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// Component: displays a summary of languages and aptitude levels
const SummaryCard = ({
    languages,
    theme
}) => (
    <Card sx={{ maxWidth: '40rem', width: '100%', backgroundColor: theme.palette.background.default }}>
        <CardContent>

            <Stack direction='column' spacing={3}>
                {languages.map((language) => (
                    <Box>
                        <Typography color='secondary' variant='h6'>
                            {language.name}
                        </Typography>
                        <Slider
                            aria-label={`${language.name}-slider`}
                            value={language.level}
                            disabled
                        />
                        <Typography color='secondary' variant='subtitle1'>
                            {language.description}
                        </Typography>
                    </Box>
                ))}
            </Stack>

        </CardContent>
    </Card>
);

export default SummaryCard;
