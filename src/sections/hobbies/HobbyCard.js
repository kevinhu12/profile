import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// Component: a card that displays a hobby
const HobbyCard = ({
    hobby,
    theme
}) => (
    <Card sx={{
        border: '0.15rem solid white',
        display: 'flex',
        width: 1100,
        maxWidth: 1100
    }}>
        {hobby.srcType === 'image' ? (
            <CardMedia
                image={hobby.image}
                title={hobby.name}
                sx={{ width: 500, height: 400 }}
            />
        ) : (
            <CardMedia
                component='iframe'
                title={hobby.name}
                src={`https://www.youtube.com/embed/${hobby.videoId}`}
                sx={{ width: 500, height: 400 }}
            />
        )}
        <CardContent>
            <Typography gutterBottom color='secondary' variant='h5'> 
                {hobby.name}
            </Typography>
            <Typography color='secondary' variant='body1'>
                {hobby.description}
            </Typography>
        </CardContent>
    </Card>
);

export default HobbyCard;
