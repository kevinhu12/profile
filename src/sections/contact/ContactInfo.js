import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Section from '../../shared/Section';
import { contacts } from './constants';

const ContactInfo = ({

}) => {
    const theme = useTheme();
    
    return (
        <Section background='primary'>
            <Grid container spacing={2} sx={{ overflow: 'hidden' }} justifyContent='center'>
                <Grid xs={12}>
                    <Typography align='center' color='primary' variant='h5'>
                        I'd love to connect! Let's get in touch.
                    </Typography>
                </Grid>

                {contacts.map((contact, i) => (
                    <Grid xs={12} sm={4} display='flex' flexDirection='column' alignItems='center'>
                        {/* TODO: move link to a "open in new tab" button beside the account instead (maybe) */} 
                        {i === 0 ? (
                            <GitHubIcon color='primary' fontSize='large' />
                        ) : i === 1 ? (
                            <EmailIcon color='primary' fontSize='large' />
                        ) : (
                            <LinkedInIcon color='primary' fontSize='large' />
                        )}
                        <Link 
                            color={theme.palette.titles.skyBlue}
                            href={contact.link}
                            target='_blank'
                            underline='none'
                            variant='h6'
                            sx={{ '&:hover': { color: theme.palette.titles.blue } }}
                        >
                            {contact.name}
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Section>
    );
}

export default ContactInfo;
