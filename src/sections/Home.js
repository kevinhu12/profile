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
                        sx={{ mb: 20, position: 'absolute' }}
                        variant='h1'
                    >
                        Hello!
                    </Typography>
                    <Typography
                        align='center'
                        color='primary'
                        sx={{ mt: 10, position: 'absolute', backgroundColor: '#00000060' }}
                        variant='h3'
                    >
                        I'm Kevin, an aspiring developer in the software world.
                    </Typography>
                </Box>
            </ParallaxBanner>
        </Section>
    );
}

export default Home;
