import * as React from 'react';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import { motion } from 'framer-motion';

const TableDbView = ({
    data,
    theme
}) => (
    <TableContainer component={Card}>
        <Table sx={{ maxWidth: 1000, backgroundColor: theme.palette.background.quatanary }}>
            <TableHead>
                <TableRow>
                    <TableCell width='20%' padding='none'>Name</TableCell>
                    <TableCell width='80%' padding='none'>Description</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((db) => (
                    <TableRow>
                        <TableCell padding='none'>{db.name}</TableCell>
                        <TableCell padding='none'>{db.description}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default TableDbView;
