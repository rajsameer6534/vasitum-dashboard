/* eslint-disable no-underscore-dangle */
import React from 'react';
import './tableList.css';

// Material UI imports
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import LinearProgress from '@mui/material/LinearProgress';
function ProjectTable() {
    
    const data = [
        {
            _id: 'PRJ001',
            project: 'Website Redesign',
            manager: 'Alice Johnson',
            startDate: '1 March, 2023',
            budget: 100000,
            status: 'Ongoing',
            progress: 60,
        },
        {
            _id: 'PRJ002',
            project: 'Mobile App Development',
            manager: 'David Smith',
            startDate: '15 May, 2023',
            budget: 150000,
            status: 'Pending',
            progress: 0,
        },
        {
            _id: 'PRJ003',
            project: 'Data Migration',
            manager: 'John Doe',
            startDate: '10 June, 2023',
            budget: 75000,
            status: 'Completed',
            progress: 100,
        },
        {
            _id: 'PRJ004',
            project: 'Cloud Infrastructure Setup',
            manager: 'Mary Jane',
            startDate: '20 July, 2023',
            budget: 200000,
            status: 'Ongoing',
            progress: 75,
        },
        {
            _id: 'PRJ005',
            project: 'Marketing Campaign',
            manager: 'Michael Green',
            startDate: '5 August, 2023',
            budget: 50000,
            status: 'Pending',
            progress: 0,
        },
    ];

    return (
        <TableContainer component={Paper} className="table_list">
            <Table sx={{ minWidth: 650 }} aria-label="project table">
                <TableHead>
                    <TableRow>
                        <TableCell className="table_cell">Project ID</TableCell>
                        <TableCell className="table_cell">Project Name</TableCell>
                        <TableCell className="table_cell">Manager</TableCell>
                        <TableCell className="table_cell">Budget (USD)</TableCell>
                        <TableCell className="table_cell">Start Date</TableCell>
                        <TableCell className="table_cell">Status</TableCell>
                        <TableCell className="table_cell">Progress</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row._id}>
                            <TableCell component="th" scope="row" className="table_cell">
                                {row._id}
                            </TableCell>
                            <TableCell className="table_cell">{row.project}</TableCell>
                            <TableCell className="table_cell">{row.manager}</TableCell>
                            <TableCell className="table_cell">${row.budget.toLocaleString()}</TableCell>
                            <TableCell className="table_cell">{row.startDate}</TableCell>
                            <TableCell className="table_cell">
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                            <TableCell className="table_cell">
                                <LinearProgress 
                                    variant="determinate" 
                                    value={row.progress} 
                                    style={{ height: '10px', borderRadius: '5px' }}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ProjectTable;
