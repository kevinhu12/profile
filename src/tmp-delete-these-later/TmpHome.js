// Imports
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import testimg from '../images/react-logo.png';

import { motion, useMotionValue, useTransform } from 'framer-motion';

const tickVariants = {
    pressed: (isChecked) => ({ pathLength: isChecked ? 0.85 : 0.2 }),
    checked: { pathLength: 1 },
    unchecked: { pathLength: 0 }
  };
  
  const boxVariants = {
    hover: { scale: 1.05, strokeWidth: 60 },
    pressed: { scale: 0.95, strokeWidth: 35 },
    checked: { stroke: "#FF008C" },
    unchecked: { stroke: "#ddd", strokeWidth: 50 }
  };


// A VERSION THAT HAS A SOMEWHAT WORKING LINE DRAWING

// Main component
const Home = ({

}) => {
    const theme = useTheme();

    const [isChecked, setIsChecked] = useState(false);
    const pathLength = useMotionValue(0);
    const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);
    
    return (
        <Box sx={{ p: theme.spacingValues.box }}>
            <Grid container spacing={2}>
                <Grid xs={5} sx={{ background: theme.palette.background.primary }}>
                    <Typography color='primary'>
                        <Box
                            alt='My picture'
                            component='img'
                            src={testimg}
                            sx={{ height: 600, width: 600 }}
                        />
                    </Typography>
                </Grid>
                <Grid xs={7} sx={{ background: theme.palette.background.secondary }}>
                    <Typography color='secondary'>
                        Description here <br />
                        a <br />
                        a <br />
                        <motion.svg
                            initial={false}
                            animate={isChecked ? "checked" : "unchecked"}
                            whileHover="hover"
                            whileTap="pressed"
                            width="440"
                            height="440"
                            onClick={() => setIsChecked(!isChecked)}
                        >
                            <motion.path
                                d="M 72 136 C 72 100.654 100.654 72 136 72 L 304 72 C 339.346 72 368 100.654 368 136 L 368 304 C 368 339.346 339.346 368 304 368 L 136 368 C 100.654 368 72 339.346 72 304 Z"
                                fill="transparent"
                                strokeWidth="50"
                                stroke="#FF008C"
                                variants={boxVariants}
                            />
                            <g transform="translate(10.276832, 24.739462)">
                            <motion.path
                                d="M 2.96875 -16.640625 C 2.6875 -16.285156 2.285156 -16 1.765625 -15.78125 C 1.253906 -15.570312 0.765625 -15.46875 0.296875 -15.46875 L 0.296875 -18.90625 C 1.035156 -19.019531 1.769531 -19.3125 2.5 -19.78125 C 3.226562 -20.25 3.753906 -20.863281 4.078125 -21.625 L 7.546875 -21.625 L 7.546875 0 L 2.96875 0 Z M 2.96875 -16.640625"
                                transform="translate(54.917 88.332) rotate(-4 170.904 128.687)"
                                fill="transparent"
                                strokeWidth="1"
                                stroke="hsl(0, 0%, 100%)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                variants={tickVariants}
                                style={{ pathLength, opacity }}
                                custom={isChecked}
                            />
                            </g>
                        </motion.svg>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Home;
