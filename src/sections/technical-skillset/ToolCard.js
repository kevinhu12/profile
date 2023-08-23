import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { motion } from 'framer-motion';

// TODO: make relational databases show in table, nosql show as json
// TODO: rename this section (maybe "Working with Data"?)
const ToolCard = ({
    tool,
    theme
}) => (
    <Card sx={{ maxWidth: 1000, backgroundColor: theme.palette.background.quatanary }}>
        <CardContent>
            <Typography color='tertiary' variant='h6'>
                {tool.name}
            </Typography>
            {tool.examples.map((example) => (
                <code>
                    <div>{example.title}</div>
                    <div>{`\{`}</div>
                    {example.fields.map((field) => (
                        <div style={{ marginLeft: '30px' }}>
                            {field}
                        </div>
                    ))}
                    <div>{`\}`}</div>
                </code>
            ))}
        </CardContent>
    </Card>
);

export default ToolCard;
