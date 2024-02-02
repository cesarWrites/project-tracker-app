import React from 'react';
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
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>
        {/* Add more items as needed */}
      </List>
    </Drawer>
    </div>
  );
};

export default SideNavbar;
