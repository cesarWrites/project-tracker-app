import React, { useState } from 'react';
import CreateUser from './CreateUser'; // Import your users table component
import UserTable from './UserList'; // Import your create user form component
import { Button } from '@material-ui/core';
import { AppBar, Tabs, Tab,makeStyles } from '@material-ui/core';
import axios from 'axios';

const AdminNavigation = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='app-bar'>
      {<AppBar position="static" style={{ backgroundColor: '#152238'}}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Create User" />
          <Tab label="  View Users" />
        </Tabs>
      </AppBar>
    }

      {value === 0 && <CreateUser />} 
      {value === 1 && <UserTable />}
    </div>
  );
};

export default AdminNavigation;
