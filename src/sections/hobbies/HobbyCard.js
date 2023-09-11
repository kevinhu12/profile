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
            maxWidth: sizes.cardWidth,
            [theme.breakpoints.down('md')]: {
                width: sizes.cardWidthMd,
                maxWidth: sizes.cardWidthMd,
                flexDirection: 'column'
            },
            [theme.breakpoints.down('sm')]: {
                width: sizes.cardWidthSm,
                maxWidth: sizes.cardWidthSm,
                flexDirection: 'column'
            },
        }}
    >
        <Box display='flex' alignItems='center'>
            {hobby.srcType === 'image' ? (
                <CardMedia
                    image={hobby.image}
                    title={hobby.name}
                    sx={{
                        width: sizes.mediaWidth,
                        height: sizes.mediaHeight,
                        [theme.breakpoints.down('md')]: { width: sizes.cardWidthMd },
                        [theme.breakpoints.down('sm')]: { width: sizes.cardWidthSm }
                    }}
                />
            ) : (
                <CardMedia
                    component='iframe'
                    title={hobby.name}
                    src={`https://www.youtube.com/embed/${hobby.videoId}`}
                    sx={{
                        width: sizes.mediaWidth,
                        height: sizes.mediaHeight,
                        [theme.breakpoints.down('md')]: { width: sizes.cardWidthMd },
                        [theme.breakpoints.down('sm')]: { width: sizes.cardWidthSm }
                    }}
                />
            )}
        </Box>
        <CardContent
            sx={{
                maxWidth: sizes.textWidth,
                [theme.breakpoints.down('md')]: { maxWidth: sizes.cardWidthMd },
                [theme.breakpoints.down('sm')]: { maxWidth: sizes.cardWidthSm }
            }}
        >
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
