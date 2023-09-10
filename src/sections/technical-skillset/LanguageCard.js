import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CustomIcon from '../../shared/CustomIcon';

// Component: displays a featured language
const LanguageCard = ({
    language,
    disableTopPadding,
    theme
}) => (
    <Card 
        sx={{ 
            maxWidth: '34rem', 
            backgroundColor: theme.palette.background.default,
            mt: disableTopPadding ? 0 : 3
        }}
    >
        <CardContent>
            <Stack direction='row' alignItems='center' spacing={2}>
                <CustomIcon image={language.icon} />
                {/* TODO: remove slider thumbs (circles) */}
                <Slider
                    aria-label={`${language.name}-slider`}
                    value={language.level}
                    disabled
                />
            </Stack>
            
            <Typography color='secondary' variant='body1' sx={{ mt: 3 }}>
                {language.description}
            </Typography>
            {language.subsections.map((subsection) => (
                <Typography color='secondary' variant='body1' sx={{ mt: 3 }}>
                    {subsection}
                </Typography>
            ))}
        </CardContent>
    </Card>
);

export default LanguageCard;
