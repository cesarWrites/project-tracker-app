import React, { useState } from 'react';
import { TextField, Button, makeStyles } from '@material-ui/core';
import axios from 'axios';

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

const CreateEngagementType = () => {
  const classes = useStyles();
  const [businessUnit, setBusinessUnit] = useState('');

  const handleChange = (e) => {
    setBusinessUnit(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/signup', businessUnit);
        console.log(response.data);
      } catch (error) {
        console.error('Signup error:', error.message);
      }
    console.log('Business Unit created:', businessUnit);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        label="Engagement"
        variant="outlined"
        className={classes.inputField}
        value={businessUnit}
        onChange={handleChange}
        required
      />
      
      <Button variant="contained" color="primary" type="submit">
        Create Engagement
      </Button>
    </form>
  );
};

export default CreateEngagementType;
