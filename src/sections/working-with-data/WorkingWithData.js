import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import JsonDbView from './JsonDbView';
import TableDbView from './TableDbView';
import {
    noSqlDatabases,
    sqlDatabases
} from './constants';

// Main component
const WorkingWithData = ({

}) => {
    const theme = useTheme();

    const [selectedTab, setSelectedTab] = useState(0);
    const handleSelectTab = (e, tabIdx) => {
        setSelectedTab(tabIdx);
    };
    
    return (
        <Box sx={{ p: theme.spacingValues.box, background: theme.palette.background.primary }}>
            <Grid container spacing={2} sx={{ overflow: 'hidden' }} justifyContent='center'>

                {/* Section header */}
                <Grid xs={12}>
                    <Typography color='secondary' variant='subtitle2'>
                        WORKING WITH DATA
                    </Typography>
                </Grid>

                {/* Description */}
                <Grid xs={3}>
                    <Typography color='primary' variant='h5'>
                        Databases
                    </Typography>
                    <Typography color='primary' variant='body1'>
                        Here are some of the databases I've worked with.
                    </Typography>
                </Grid>
                <Grid xs={9}>

                    {/* Databases */}
                    <Tabs value={selectedTab} onChange={handleSelectTab} aria-label='database tabs'>
                        <Tab label='Relational Databases' id='tab-0' aria-controls='tabpanel-0' />
                        <Tab label='NoSQL Databases' id='tab-1' aria-controls='tabpanel-1' />
                    </Tabs>
                    <div role='tabpanel' hidden={selectedTab !== 0} id='tabpanel-0' aria-labelledby='tab-0'>
                        <TableDbView
                            data={sqlDatabases}
                            theme={theme}
                        />
                    </div>
                    <div role='tabpanel' hidden={selectedTab !== 1} id='tabpanel-1' aria-labelledby='tab-1'>
                        <JsonDbView
                            data={noSqlDatabases}
                            theme={theme}
                        />
                    </div>
                    
                </Grid>
            </Grid>
        </Box>
    );
}

export default WorkingWithData;
