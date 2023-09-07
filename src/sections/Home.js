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
        <Section disableTopPadding>
            <ParallaxBanner
                layers={[{ image: backgroundImage, speed: -25 }]}
                style={{ height: '1000px' }}
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
                        color='secondary'
                        sx={{ mb: 10, position: 'absolute' }}
                        variant='h1'
                    >
                        Hello!
                    </Typography>
                    <Typography
                        color='secondary'
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
