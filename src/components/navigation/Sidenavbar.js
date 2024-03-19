import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles , Collapse, IconButton } from '@material-ui/core';
import { Home, Apps, Description, Assignment, 
  ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import NavSection from './NavComponent';
import logo from '../../assets/oca_logo.svg';

const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    width: '60px', // Adjust width according to your design
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    zIndex: 1000,
    backgroundColor: '#3088AF',
    top: '68px',
    // paddingTop: theme.spacing(8), 
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    left: 0,
    backgroundColor: '#3088AF',
    color: '#fff',
    top: '68px',
  },
  listitem: {
    color: '#fff',
    '&hover': {
      backgroundColor: '#555',
    },
  },
  selected: {
    color: '#fff'
  },
  activeItem: {
    backgroundColor: '#fff',
    borderRadius: '2%',
  },
  toolbar: theme.mixins.toolbar,
}));

const SideNavbar = () => {
  const classes = useStyles();
  const [collapsed, setCollapsed] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName)
  }

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  }


  return (
    <div className='side-nav'>
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <List>
      <ListItem Button component={Link} to='/services' 
      className={selectedItem === 'Services' ? classes.activeItem : classes.listItem} 
      onClick={() => handleItemClick('Services')}>
          <ListItemIcon>
            <Apps />
          </ListItemIcon>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem Button component={Link} to="/dashboard" 
        className={selectedItem === 'Home' ? classes.activeItem : classes.listItem} 
        onClick={() => handleItemClick('Home')}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem Button component={Link} to="/dashboard" 
        className={selectedItem === 'Project Survey' ? classes.activeItem : classes.listItem} 
        onClick={() => handleItemClick('Project Survey')}>
          <ListItemIcon>
            <Assignment/>
          </ListItemIcon>
          <ListItemText primary="Project Survey" />
        </ListItem >
        <ListItem Button component={Link} to="/dashboard" 
        className={selectedItem === 'Approval' ? classes.activeItem : classes.listItem} 
        onClick={() => handleItemClick('Approval')}>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Approval" />
        </ListItem>
        <ListItem Button
        style={{ marginTop: '50%'}}
        className={selectedItem === 'Reports' ? classes.activeItem : classes.listItem} 
        onClick={() => handleItemClick('Reports')}>
          <ListItemIcon>
            <Description />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
        </List>
    </Drawer>
    </div>
  );
};

export default SideNavbar;
