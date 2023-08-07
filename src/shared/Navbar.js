// Imports
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Menu } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Constants
const pages = ['About Me', 'Projects', 'Hobbies'];

// Styled components

// Main component
export const Navbar = ({

}) => {
    const theme = useTheme();

    // Anchor states and handler functions (for smaller screens)
    const [anchorEl, setAnchorEl] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleCloseNavMenu = () => {
        setAnchorEl(null);
    }
    
    // Open a page
    const openPage = (idx) => {
        switch (idx) {
            case 0:
                // Open About Me
                break;
            default:
                // Throw error
                break;
        }
    }
    
    return (
        <AppBar position="static" sx={{ background: theme.palette.background.secondary }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    {/* Menu version (narrow screen) */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            aria-label='account of current user'
                            onClick={handleOpenNavMenu}
                            size='large'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            anchorOrigin={{ vertical: 'bottom', horiztonal: 'left' }}
                            id='menu-appbar'
                            keepMounted
                            onClose={handleCloseNavMenu}
                            open={Boolean(anchorEl)}
                            sx={{ display: {xs: 'block', md: 'none' } }}
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                        >
                            {pages.map((page, idx) => (
                                <MenuItem 
                                    key={page} 
                                    onClick={() => {
                                        handleCloseNavMenu();
                                        openPage(idx);
                                    }}
                                >
                                    <Typography textAlign='center'>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Normal version (wide screen) */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
                        {pages.map((page, idx) => (
                            <Button
                                key={page}
                                onClick={() => openPage(idx)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
