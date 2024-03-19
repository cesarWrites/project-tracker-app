import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Edit } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
      border: '1px solid #ddd',
      margin: '2%', 
    },
    tableHeaderCell: {
      fontWeight: 'bold',
      border: '1px solid #ddd', // Add border style
      padding: theme.spacing(1),
    },
    tableBodyCell: {
      border: '1px solid #ddd', // Add border style
      padding: theme.spacing(1),
    },
  }));
  
  const UserTable = () => {
    const classes = useStyles();
    const [users, setUsers] = useState([]);
   
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/users');
          setUsers(response.data);
        } catch (error) {
          console.error('Error fetching projects:', error.message);
        }
      };
  
      fetchData();
    }, []);
    const handleEdit = () => {
        // Implement your logic for opening the edit interface here
        console.log('Editing user:');
      };
  
    return (
      <div className='user-list'>
        <div className='usertbl-content'>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Last Login</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell><button onClick={() => handleEdit()}>
          <Edit />
        </button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
      </div>
    );
  };
  
  export default UserTable;
  
