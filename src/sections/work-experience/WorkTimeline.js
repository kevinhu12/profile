import React from 'react';
import Avatar from '@mui/material/Avatar';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

import CustomIcon from '../../shared/CustomIcon';

const WorkTimeline = ({
    jobs,
    theme
}) => (
    <Timeline 
        position='right'
        sx={{ [`& .${timelineOppositeContentClasses.root}`]: { flex: 0.5 } }}
    >
        {jobs.map((job) => (
            <TimelineItem>
                <TimelineOppositeContent 
                    align='right' 
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                >
                    <br />
                    <Typography color={theme.palette.titles.skyBlue} variant='h5'>
                        {job.company}
                    </Typography>
                    <Typography color='primary' variant='h6'>
                        {job.title}
                    </Typography>
                    <Typography color='primary' variant='subtitle1'>
                        {job.dates}
                    </Typography>
                    <br />
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color='primary'>
                        <CustomIcon image={job.logo} />
                        {/* <Avatar
                            src={job.logo.src}
                        /> */}
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                >
                    <Typography color='primary' variant='h6'>
                        {job.description}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        ))}
    </Timeline>
);

export default WorkTimeline;
