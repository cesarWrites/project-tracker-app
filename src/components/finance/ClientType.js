import React, { useState } from 'react';
import { TextField, Button, makeStyles } from '@material-ui/core';
import axios from 'axios';
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
}));

const CreateClientType = () => {
  const classes = useStyles();
  const [businessUnit, setBusinessUnit] = useState('');

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

  return (
    <div>
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        label="Client Type"
        variant="outlined"
        className={classes.inputField}
        value={businessUnit}
        onChange={handleChange}
        required
      />
      <Button variant="contained" color="primary" 
      style={{ backgroundColor: '#5EAFD3', marginTop: '1rem' }} 
      type="submit">
        Client Type
      </Button>
    </form>
    </div>
  );
};


export default CreateClientType;
