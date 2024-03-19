import React, { useState } from 'react';
import { TextField, Button, makeStyles } from '@material-ui/core';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import axios from 'axios';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import BusinessUnitList from './BusinessUnitList';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 400,
    margin: 'auto',
    marginTop: '5%'
  },
  inputField: {
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 300,
    maxWidth: 600,
    margin: 'auto', 
    marginTop: '4%',
  },
  headerCell: {
    fontWeight: 'bold', 
  },
  buttonGroup: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  deleteButton: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  },
}));

const PracticumSupport = () => {
  const classes = useStyles();
  const [businessUnit, setBusinessUnit] = useState('');
  const initialItems = [
    { id: 1, item1: 'Value 1', item2: 'Value 2' },
    { id: 2, item1: 'Value 3', item2: 'Value 4' },
  ];

  const [items, setItems] = useState(initialItems);

  const handleChange = (e) => {
    setBusinessUnit(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/businessUnit', businessUnit);
        console.log(response.data);
      } catch (error) {
        console.error('Error creating business unit error:', error.message);
      }
    console.log('Business Unit created:', businessUnit);
  };

  const handleDelete = () => {
    
  }

  const handleEdit = () => {

  }

  return (
    <div>
    <form className={classes.form} onSubmit={handleSubmit}>
    <TextField
        label="Support"
        variant="outlined"
        className={classes.inputField}
        value={''}
        onChange={handleChange}
        required
      />
      <Button variant="contained" 
      color="primary" 
      style={{ backgroundColor: '#5EAFD3', marginTop: '1rem' }} 
      type="submit">
        Submit
      </Button>
    </form>
    <TableContainer component={Paper} className={classes.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.headerCell}>Notation</TableCell>
              <TableCell className={classes.headerCell}>Business Unit</TableCell>
              <TableCell className={classes.headerCell}>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(item => (
              <TableRow key={item.id}>
                <TableCell contentEditable={true} onBlur={(e) => handleEdit(item.id, 'item1', e.target.innerText)}>{item.item1}</TableCell>
                <TableCell contentEditable={true} onBlur={(e) => handleEdit(item.id, 'item2', e.target.innerText)}>{item.item2}</TableCell>
                <TableCell>
                  <div className={classes.buttonGroup}>
                  <Button 
                   variant="contained" 
                   color="primary"
                   startIcon={<EditIcon/>}>
                    Edit
                  </Button>
                  <Button 
                   variant="contained" 
                   color="primary"
                   startIcon={<DeleteIcon/>}
                   className={classes.deleteButton}
                   >
                    Delete
                  </Button>
                  <Button 
                   variant="contained" 
                   color="primary">
                    View
                  </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PracticumSupport;
