import React, { useState } from 'react';
import CreateUser from './CreateUser'; // Import your users table component
import UserTable from './UserList'; // Import your create user form component
import { Button } from '@material-ui/core';

const AdminNavigation = () => {
  const [showTable, setShowTable] = useState(true); // State to toggle between table and form

  const toggleView = () => {
    setShowTable(!showTable); // Toggle the state when the button is clicked
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={toggleView}>
        {showTable ? 'Show Form' : 'Show Table'}
      </Button>
      {showTable ? <UserTable /> : <CreateUser />}
    </div>
  );
};

export default AdminNavigation;
