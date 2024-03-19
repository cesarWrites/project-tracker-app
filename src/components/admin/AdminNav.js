import React, { useState } from 'react';
import CreateUser from './CreateUser'; // Import your users table component
import UserTable from './UserList'; // Import your create user form component
import { Button, Typography } from '@material-ui/core';
import axios from 'axios';
import { AppBar, Tabs, Tab,makeStyles, Grid, List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';

const AdminNavigation = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ width: 'fit-content', marginLeft: '4%'}}>
    <List>
      <Typography variant='h5'>Admin SetUp</Typography>
      <hr/>
      <ListItem button component={Link} to="/user-list">
      <ListItemText primary='View Users'/>
      </ListItem>
    </List>
    </div>
  );
};

export default AdminNavigation;
