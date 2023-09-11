import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// Component: a card that displays a hobby
const HobbyCard = ({
    hobby,
    sizes,
    theme
}) => (
    <Card
        sx={{
            border: '0.15rem solid white',
            display: 'flex',
            width: sizes.cardWidth,
            maxWidth: sizes.cardWidth
        }}
    >
        <Box display='flex' alignItems='center'>
            {hobby.srcType === 'image' ? (
                <CardMedia
                    image={hobby.image}
                    title={hobby.name}
                    sx={{ width: sizes.mediaWidth, height: sizes.mediaHeight }}
                />
            ) : (
                <CardMedia
                    component='iframe'
                    title={hobby.name}
                    src={`https://www.youtube.com/embed/${hobby.videoId}`}
                    sx={{ width: sizes.mediaWidth, height: sizes.mediaHeight }}
                />
            )}
        </Box>
        <CardContent sx={{ maxWidth: sizes.textWidth }}>
            <Typography color='secondary' variant='h5' sx={{ fontWeight: 'bold' }}> 
                {hobby.name}
            </Typography>
            {hobby.entries.map((entry) => (
                <Typography color='secondary' variant='body1' sx={{ mt: 2 }}>
                    {entry}
                </Typography>
            ))}
        </CardContent>
    </Card>
);

export default HobbyCard;
