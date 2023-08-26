import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import avatarPic from '../../images/react-logo.png';
import {
} from './constants';

const ContactInfo = ({

}) => {
    const theme = useTheme();
    
    return (
        <Box sx={{ p: theme.spacingValues.box, background: theme.palette.background.primary }}>
            <Grid container spacing={2} sx={{ overflow: 'hidden' }} justifyContent='center'>

                {/* Section header */}
                <Grid xs={12}>
                    <Typography color='secondary' variant='subtitle2'>
                        CONTACT ME!
                    </Typography>
                </Grid>

                {/* Description */}
                <Grid xs={5}>
                    <Typography color='primary' variant='h5'>
                        Contact Me
                    </Typography>
                    <Typography color='primary' variant='body1'>
                        I look forward to hearing from you!
                    </Typography>
                </Grid>

                {/* Avatar */}
                <Grid xs={2} display='flex' justifyContent='center'>
                    <Avatar
                        alt='Kevin Hu'
                        src={avatarPic}
                        sx={{ width: 200, height: 200 }}
                    />
                </Grid>

                {/* Contact info */}
                <Grid xs={5}>
                    <Typography color='primary' variant='h5'>
                        Details
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ContactInfo;
