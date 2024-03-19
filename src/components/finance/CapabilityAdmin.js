import React, { useContext, useEffect, useState } from 'react';
import { TextField, Button, makeStyles } from '@material-ui/core';
import axios from 'axios';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DataContext from '../../state/DataContext';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 400,
    margin: 'auto',
    marginTop: '5%'
  },
  headerCell: {
    fontWeight: 'bold', 
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
  }
}));

const CreateCapability = () => {
  const classes = useStyles();
  const [selectedCapability, setSelectedCapability] = useState('');
  const [capability, setCapability] = useState([]);
  const { data5 } = useContext(DataContext);

  // useEffect(() => {
  //   axios.get('http://34.125.226.2:3123/projects_service/finance/?filter=CLIENT TYPE')
  //     .then(response => {
  //       const capabilityData = response.data.data.data;
  //         setCapabilities(capabilityData);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  const handleChange = (e) => {
    setCapability(e.target.value);
  };

  const handleCapabilityChange = (e) => {
    setSelectedCapability(e.target.value);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://34.125.226.2:3123/projects_service/finance/capability', {capability:capability});
        toast.success('Success');
        console.log(response.data);
      } catch (error) {
        toast.error('error');
        console.error('Error creating capability:', error.message);
      }
    console.log('Capability created:', capability);
  };

  const handleDelete = () => {
    
  }

  const handleEdit = () => {

  }

  console.log(data5)

  return (
    <div>
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        label="OCA Capability"
        variant="outlined"
        className={classes.inputField}
        value={capability}
        onChange={handleChange}
        required
      />
      <Button variant="contained" 
      color="primary" 
      style={{ backgroundColor: '#5EAFD3', marginTop: '1rem' }} 
      type="submit">
        Submit
      </Button>
      <ToastContainer/>
    </form>
    <TableContainer component={Paper} className={classes.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.headerCell}>Capability</TableCell>
              <TableCell className={classes.headerCell}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data5.map(item => (
              <TableRow key={item.id}>
                <TableCell contentEditable={true} onBlur={(e) => handleEdit(item.id, 'item1', e.target.innerText)}>{item.type}</TableCell>
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

export default CreateCapability;
