import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ColorContext } from '../../ColorContext/darkContext';
import { Box, Typography, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BarChartIcon from '@mui/icons-material/BarChart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import TableChartIcon from '@mui/icons-material/TableChart';
import MenuIcon from '@mui/icons-material/Menu';
import logoimg from '../../Images/Screenshot 2024-09-21 143743.png';
import './Sidebar.css';

function Sidebar() {
  const { darkMode, dispatch } = useContext(ColorContext);

  return (
    <Box className={`sidebar ${darkMode ? 'dark' : ''}`}>
      <Box className="logo">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img src={logoimg} alt="Admin Dashboard Logo" className="logo-img" />
        </Link>
      </Box>

      <Box className="menu-icon">
        <IconButton onClick={() => dispatch({ type: 'TOGGLE_MENU' })}>
          <MenuIcon sx={{ color: darkMode ? '#fff' : '#000' }} />
        </IconButton>
      </Box>

      <Box className="links">
        <ul>
          <Typography className="spann">Main</Typography>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <li>
              <DashboardIcon className="icon" /> Dashboard
            </li>
          </Link>

          <Typography className="spann">Lists</Typography>
          <Link to="/users" style={{ textDecoration: 'none' }}>
            <li>
              <PersonIcon className="icon" /> Employees
            </li>
          </Link>

          <Link to="/products" style={{ textDecoration: 'none' }}>
            <li>
              <TableChartIcon className="icon" /> Interns
            </li>
          </Link>
          <Link to="/orders" style={{ textDecoration: 'none' }}>
            <li>
              <CreditCardIcon className="icon" /> Recruitments
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" /> Schedule
          </li>
          <li>
            <BarChartIcon className="icon" /> Status
          </li>

          <Typography className="spann">Settings</Typography>
          <li>
            <AccountCircleIcon className="icon" /> Profile
          </li>
          <li>
            <SettingsRoundedIcon className="icon" /> Settings
          </li>
          <li>
            <LogoutIcon className="icon" /> Log Out
          </li>
        </ul>
      </Box>
    </Box>
  );
}

export default Sidebar;
