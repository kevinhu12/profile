import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ToolCard = ({
    tool,
    theme
}) => (
    <Card sx={{ maxWidth: 345, backgroundColor: theme.palette.background.secondary }}>
        <CardContent>
            <Typography color='primary' variant='h6'>
                {tool.name}
            </Typography>
            {tool.examples.map((example) => (
                <Typography color='tertiary' variant='body2'>
                    {example}
                </Typography>
            ))}
        </CardContent>
    </Card>
);

export default ToolCard;
