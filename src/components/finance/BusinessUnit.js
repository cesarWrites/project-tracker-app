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
  Button: {
    padding: '5%',
  },
}));

const CreateBusinessUnitForm = () => {
  const classes = useStyles();
  const [entity, setEntity] = useState('');
  const [notation, setNotation] = useState('');

  const handleNotationChange = (e) => {
    setNotation(e.target.value);
  };

  const handleBusinessUnitChange = (e) =>{
    setEntity(e.target.value);
  } 

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://34.125.226.2:3123/projects_service/finance/business_unit', {notation:notation,entity:entity});
        console.log(response.data );
      } catch (error) {
        console.log(notation)
        console.error('Error creating business unit error:', error.message);
      }
  };

  

  return (
    <div>
    <form className={classes.form} onSubmit={handleSubmit}>
    <TextField
        label="Notation"
        variant="outlined"
        className={classes.inputField}
        value={notation}
        onChange={handleNotationChange}
        required
      />
      <TextField
        label="Business Unit"
        variant="outlined"
        className={classes.inputField}
        value={entity}
        onChange={handleBusinessUnitChange}
        required
      />
      <Button variant="contained" 
      className={classes.button}
      color="primary" 
      style={{ backgroundColor: '#5EAFD3', marginTop: '1rem' }} 
      type="submit">
        Submit
      </Button>
    </form>
    </div>
  );
};

export default CreateBusinessUnitForm;
