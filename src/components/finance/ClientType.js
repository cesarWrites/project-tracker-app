import React, { useContext, useEffect, useState } from 'react';
import { TextField, Button, makeStyles } from '@material-ui/core';
import axios from 'axios';
import BusinessUnitList from './BusinessUnitList';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
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
  inputField: {
    marginBottom: theme.spacing(2),
  },
  Button: {
    padding: '5%'
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

const CreateClientType = () => {
  const classes = useStyles();
  const [type, setType] = useState('');
  const [clientTypes, setClientTypes] = useState([]);
  const { data2 } = useContext(DataContext);



  // useEffect(() => {
  //   axios.get('http://34.125.226.2:3123/projects_service/finance/?filter=CLIENT TYPE')
  //     .then(response => {
  //       const clientData = response.data.data.data;
  //         setClientTypes(clientData);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  const showToastMessage = () => {
    toast.success("Success Notification!", {
    });
  };

  const handleChange = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://34.125.226.2:3123/projects_service/finance/client_type', {type:type});
        showToastMessage();
        console.log(response.status);
      } catch (error) {
        console.error('Error creating client type error:', error.message);
      }
  };

  const handleDelete = () => {
    
  }

  const handleEdit = () => {

  }
  return (
    <div>
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        label="Client Type"
        variant="outlined"
        className={classes.inputField}
        value={type}
        onChange={handleChange}
        required
      />
      <Button variant="contained" color="primary" 
      classes={classes.button}
      style={{ backgroundColor: '#5EAFD3', marginTop: '1rem' }} 
      type="submit">
        Submit
      </Button>
      <ToastContainer />
    </form>
    </div>
  );
};


export default CreateClientType;
