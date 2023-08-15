import React from 'react';
import Box from '@mui/material/Box';

const CustomIcon = ({
    image
}) => (
    <Box
        alt={image.alt}
        component='img'
        src={image.src}
        sx={{ height: image.height, width: image.width }}
    />
);

export default CustomIcon;
