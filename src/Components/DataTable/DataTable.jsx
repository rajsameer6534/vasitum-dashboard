import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography, Box, Card, CardContent, Grid, Switch, AppBar, Toolbar, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import man1 from '../../Images/man1.jpg';
import man2 from '../../Images/man2.jpg';
import man4 from '../../Images/man4.jpg';
import woman1 from '../../Images/woman1.jpg';
import woman2 from '../../Images/woman2.jpg';
import './datatable.css';

// Employee Data
const employeeData = [
  { id: 'EMP001', name: 'David Brown', email: 'david.brown@company.com', image: man1, position: 'Software Engineer', status: 'active', age: '24' },
  { id: 'EMP002', name: 'John Smith', email: 'john.smith@company.com', image: man2, position: 'Product Manager', status: 'active', age: '29' },
  { id: 'EMP003', name: 'Dilvia Hassan', email: 'dilvia.hassan@company.com', image: woman2, position: 'UX Designer', status: 'on leave', age: '30' },
  { id: 'EMP004', name: 'Jennifer Doe', email: 'jennifer.doe@company.com', image: woman1, position: 'Data Analyst', status: 'active', age: '27' },
  { id: 'EMP005', name: 'Lucas Hossel', email: 'lucas.hossel@company.com', image: man4, position: 'DevOps Engineer', status: 'active', age: '30' },
];

function EmployeeTable() {
  const [data, setData] = useState(employeeData);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDelete = (id) => {
    setData(data.filter((employee) => employee.id !== id));
    setOpenDialog(false);
  };

  const handleOpenDialog = (employee) => {
    setSelectedEmployee(employee);
    setOpenDialog(true);
  };

  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const columns = [
    { field: 'id', headerName: 'Employee ID', width: 120 },
    {
      field: 'name',
      headerName: 'Name',
      width: 200,
      renderCell: (param) => (
        <div className="employee">
          <Avatar src={param.row.image} alt={param.row.name} className="employee_avatar" />
          <Typography variant="body1" component="span" sx={{ marginLeft: 1, color: theme.palette.text.primary }}>
            {param.row.name}
          </Typography>
        </div>
      ),
    },
    { field: 'email', headerName: 'Email', width: isMobile ? 180 : 250, headerClassName: 'grid-header', cellClassName: 'grid-cell' },
    { field: 'position', headerName: 'Position', width: 200, cellClassName: 'grid-cell' },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderCell: (param) => (
        <Typography variant="body2" className={`status ${param.row.status}`} sx={{ color: theme.palette.text.primary }}>
          {param.row.status}
        </Typography>
      ),
    },
    { field: 'age', headerName: 'Age', width: 100, cellClassName: 'grid-cell' },
    {
      field: 'action',
      headerName: 'Action',
      width: 170,
      renderCell: (params) => (
        <div className="action_buttons">
          <Link to={`/employee/${params.row.id}`}>
            <Button variant="contained" color="primary" size="small" sx={{ marginRight: 1 }}>View</Button>
          </Link>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => handleOpenDialog(params.row)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const themeMode = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      text: {
        primary: darkMode ? '#fff' : '#000', // Ensure text color is readable in dark mode
      },
    },
  });

  return (
    <ThemeProvider theme={themeMode}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Employee Management
            </Typography>
            <IconButton sx={{ ml: 1 }} onClick={handleToggleTheme} color="inherit">
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Switch checked={darkMode} onChange={handleToggleTheme} />
          </Toolbar>
        </AppBar>
      </Box>

      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: themeMode.palette.text.primary }}>
          Employee List
        </Typography>

        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <DataGrid
                  className="data_grid"
                  rows={data}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  checkboxSelection
                  autoHeight
                  sx={{
                    '& .MuiDataGrid-cell': {
                      color: themeMode.palette.text.primary, // Set text color for all DataGrid cells
                    },
                    '& .MuiDataGrid-columnHeaders': {
                      backgroundColor: themeMode.palette.mode === 'dark' ? '#333' : '#f5f5f5',
                      color: themeMode.palette.text.primary, // Column headers should also have readable text
                    },
                    '& .MuiDataGrid-footerContainer': {
                      backgroundColor: themeMode.palette.mode === 'dark' ? '#333' : '#f5f5f5',
                    },
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Delete Confirmation Dialog */}
        {selectedEmployee && (
          <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
            <DialogTitle sx={{ color: themeMode.palette.text.primary }}>Confirm Deletion</DialogTitle>
            <DialogContent>
              <DialogContentText sx={{ color: themeMode.palette.text.primary }}>
                Are you sure you want to delete <strong>{selectedEmployee.name}</strong> from the employee list?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenDialog(false)} color="primary">
                Cancel
              </Button>
              <Button onClick={() => handleDelete(selectedEmployee.id)} color="error">
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default EmployeeTable;
