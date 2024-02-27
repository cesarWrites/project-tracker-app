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
  const [businessUnitName, setBusinessUnitName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://your-api-url/business-unit', {
        name: businessUnitName
      });
      console.log('Business unit submitted:', response.data);
    } catch (error) {
      console.error('Error submitting business unit:', error);
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        label="Engagement"
        variant="outlined"
        className={classes.inputField}
        value={businessUnitName}
        onChange={(e) => setBusinessUnitName(e.target.value)}
        required
      />
      
      <Button variant="contained" 
      color="primary"
      style={{ backgroundColor: '#5EAFD3', marginTop: '1rem' }} 
      type="submit">
        Create Engagement
      </Button>
    </form>
  );
};

export default CreateEngagementType;
