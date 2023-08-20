import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// Component: a card that displays a hobby
const HobbyCard = ({
    data,
    type,
    theme
}) => (
    <Card sx={{ width: 360, maxWidth: 360 }}>
        {type === 'Video' ? (
            <CardMedia
                component='iframe'
                src={`https://www.youtube.com/embed/${data.videoId}`}
                title={data.title}
                sx={{ height: 300 }}
            />
        ) : (
            <CardMedia
                image={data.img}
                title={data.title}
                sx={{ height: 300 }}
            />
        )}
        <CardContent>
            <Typography gutterBottom color='tertiary' variant='h5'>
                {data.title}
            </Typography>
            <Typography color='tertiary' variant='body1'>
                {data.description}
            </Typography>
        </CardContent>
    </Card>
);

export default HobbyCard;
