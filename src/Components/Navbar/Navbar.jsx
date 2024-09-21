import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import { ColorContext } from '../../ColorContext/darkContext';
import './navbar.css';
import admin from '../../Images/avtar.jpg';

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const { darkMode, dispatch } = useContext(ColorContext);
  const theme = useTheme();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="navbar" style={{ backgroundColor: theme.palette.background.default }}>
      <div className="navbar_main">
        <div className="menu_logo">
          {toggle ? (
            <CloseIcon className="menu_icon" onClick={handleToggle} />
          ) : (
            <MenuIcon className="menu_icon" onClick={handleToggle} />
          )}
          <Link to="/" className="logo">
            Dashboard
          </Link>
        </div>

        <div className="search">
          <input type="text" placeholder="Search.." />
          <SearchIcon className="search_icon" />
        </div>

        <div className="item_lists">
          <div className="item">
            {!darkMode ? (
              <DarkModeIcon className="item_icon" onClick={() => dispatch({ type: 'TOGGLE' })} />
            ) : (
              <LightModeIcon className="item_icon white" onClick={() => dispatch({ type: 'TOGGLE' })} />
            )}
          </div>

          <div className="item">
            <img className="admin_pic" src={admin} alt="admin" />
          </div>
          <div className="welcome-text">Welcome Sam!</div>
        </div>
      </div>

      {toggle && (
        <div className="res_navbar">
          <div className="res_nav_menu">
            <ul className="links">
              <Link to="/" className="menu_item">
                <AccountCircleIcon className="icon" /> Dashboard
              </Link>
              {/* Add more menu items here */}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
