import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import NavSection from './NavComponent';
import logo from '../assets/oca_logo.svg';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    left: 0,
    backgroundColor: '#152238',
    color: '#fff'
  },
  toolbar: theme.mixins.toolbar,
}));

const SideNavbar = () => {
  const classes = useStyles();

  return (
    <div className='side-nav'>
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
       <img src={logo} alt="OCA logo"/>
      <div className={classes.toolbar} />
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/survey">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Survey" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button component={Link} to="/finance">
        <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary=" Finance" />
        </ListItem>
        <ListItem button component={Link} to="/admin">
        <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary=" Admin"/>
        </ListItem>
        {/* Add more items as needed */}
      </List>
      <ListItem button component={Link} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Log Out" />
        </ListItem>
    </Drawer>
    </div>
  );
};

export default SideNavbar;
