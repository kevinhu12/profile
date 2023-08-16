import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { motion } from 'framer-motion';

const ToolCard = ({
    tool,
    theme
}) => (
    // <motion.div initial={{ y: 300 }} whileInView={{ y: 50, rotate: -10, transition: { type: 'sprint', bounce: 0.4, duration: 0.8 } }} viewport={{ once: true }} whileHover={{ scale: 1.1 }} >
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
    // </motion.div>
);

export default ToolCard;
