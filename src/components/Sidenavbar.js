import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import QuickAction from './QuickAction';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: theme.mixins.toolbar,
}));

const SideNavbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleToggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className='nav-main'>
      <div className='nav-list'>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleToggleDrawer}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleToggleDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem button>
            <ListItemText primary="Item 1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Item 2" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Item 3" />
          </ListItem>
          {/* Add more items as needed */}
        </List>
      </Drawer>
      </div>
    </div>
  );
};

export default SideNavbar;
