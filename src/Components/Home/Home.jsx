import React from 'react';
import Navbar from '../Navbar/Navbar';
import ProgressBar from '../ProgressBar/ProgressBar';
import Sidebar from '../Sidebar/Sidebar';
import TableList from '../TableList/TableList';
import { Box, Paper, Card, Typography, useTheme } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import './Home.css';

function Home() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className="home">
            {!isMobile && (
                <div className="home_sidebar">
                    <Sidebar />
                </div>
            )}

            <div className="home_main">
                <Navbar />

                {/* Progress Bar Section */}
                <Box className="chart_sec" sx={{ padding: '20px' }}>
                    <Card
                        sx={{
                            boxShadow: 3,
                            padding: '20px',
                            borderRadius: 2,
                            backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#fff',
                            transition: 'transform 0.3s',
                            '&:hover': {
                                transform: 'scale(1.05)',
                            },
                        }}
                    >
                        <ProgressBar />
                    </Card>
                </Box>

                {/* Table Section */}
                <Box className="table" sx={{ padding: '20px', marginTop: '40px' }}>
                    <Typography variant="h6" color="textSecondary" gutterBottom>
                        Latest Recruitments
                    </Typography>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: '20px',
                            backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#fff',
                            animation: 'fadeIn 1s ease-in-out',
                        }}
                    >
                        <TableList />
                    </Paper>
                </Box>
            </div>
        </div>
    );
}

export default Home;
