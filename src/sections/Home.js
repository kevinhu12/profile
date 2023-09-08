import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Section from '../shared/Section';
import backgroundImage from '../images/background-lake.jpg';

// Component: displays the introductory section
const Home = ({

}) => {
    const theme = useTheme();
    
    return (
        <Section disableTopPadding disableBottomPadding disableHorizontalPadding>
            <ParallaxBanner
                layers={[{ image: backgroundImage, speed: -25 }]}
                style={{ height: '40rem' }}
            >
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        height: '100%',
                        justifyContent: 'center'
                    }}
                >
                    <Typography
                        color='primary'
                        sx={{ mb: 10, position: 'absolute' }}
                        variant='h1'
                    >
                        Hello!
                    </Typography>
                    <Typography
                        color='primary'
                        sx={{ mt: 20, position: 'absolute' }}
                        variant='h3'
                    >
                        My name is Kevin.
                    </Typography>
                </Box>
            </ParallaxBanner>
        </Section>
    );
}

export default Home;
