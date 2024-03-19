import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Apps, Description } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';

const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    left: 0,
    backgroundColor: '#152238',
    color: '#fff',
    // position: 'relative', 
    top: '62px',
  },
  toolbar: theme.mixins.toolbar,
}));

const SideNav = () => {
  const classes = useStyles();

  return (
    <div className={classes.toolbar}>
    <Drawer
    //   anchor="left"
    //   open={true}
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <List>
        <ListItem Button component={Link} to="/dashboard">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem Button>
          <ListItemIcon>
            <Apps />
          </ListItemIcon>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem Button>
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

export default SideNav;
