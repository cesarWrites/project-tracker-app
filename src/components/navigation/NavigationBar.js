// NavigationBar.js

import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase } from '@mui/material';
import { Home, Search } from '@material-ui/icons';
import '../../styles/navigation.css';
import {  makeStyles } from '@material-ui/core';
import logo from '../../assets/oca_logo.svg';
import { Link } from 'react-router-dom';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Popover, Paper, List, ListItem, ListItemText} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    appBar: {
      backgroundColor: 'transparent', // Remove background color
    },
    dialogPaper: {
        borderRadius: 10,
        boxShadow: 'none',
    },
    button: {
      position: 'relative',
      overflow: 'hidden',
      transition: 'background-color 0.3s ease', 
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark, 
      },
    },
    content: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: 0,
      backgroundColor: theme.palette.primary.main,
      opacity: 0,
      transition: 'opacity 0.5s ease', 
    },
    showContent: {
      opacity: 1,
      height: '100px', // Adjust the height as needed
    },
  }));

const NavigationBar = () => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleNotificationsClick = (event) =>{
            setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

  return (
    <AppBar position="fixed"
    sx={{ bgcolor: '#ffffff' }}
    elevation={0}
    style={{ borderBottom: '1px solid #D5D8DC'}}
    className={classes.appBar}>
    <Toolbar>
        {/* Logo */}
    <img src={logo} alt="OCA logo" style={{ marginRight: '2%'}}/>

      {/* Search Bar */}
      <div style={{ flexGrow: 1, width:'25%' }}>
        <div style={{ display: 'flex', alignItems: 'center', 
        border: '1px solid #ccc', borderRadius: 4, width: '50%', marginLeft: '20%' }}>
          <IconButton color="inherit">
            <Search style={{ color: '#D5D8DC'}}/>
          </IconButton>
          <InputBase
            className="search-input"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* Settings Icon */}
      <IconButton color="inherit"  Button component={Link} to='/settings'
      style={{ color: '#276D8D'}}>
        <SettingsIcon style={{ color: '#276D8D', fontSize: '40'}}/>
      </IconButton>
      <div>

      {/* Notification Icon */}
      <IconButton color="inherit" onClick={handleNotificationsClick}>
        <NotificationsIcon style={{ color: '#276D8D', fontSize: '40'}}/>
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        getContentAnchorEl={null}
        style={{ marginTop: '10px', marginLeft: '5%', width: '100%' }}
      >
        <Paper style={{ padding: 20 }}>
          <Typography variant="h6">Notifications</Typography>
          <List>
            <ListItem button>
              <ListItemText primary="Notification 1" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Notification 2" />
            </ListItem>
            {/* Add more notifications as needed */}
          </List>
        </Paper>
      </Popover>
      </div>

      {/* Profile Icon */}
      <IconButton color='inherit'>
        <AccountCircleIcon style={{ color: '#276D8D', fontSize: '40'}}/>
      </IconButton>
    </Toolbar>
  </AppBar>
  );
};

export default NavigationBar;
