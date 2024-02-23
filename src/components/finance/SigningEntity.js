import React, { useState } from 'react';
import { TextField, Button, Checkbox, ListItem, ListItemText, List, ListItemSecondaryAction, FormControlLabel, makeStyles } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  form:{
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 400,
    margin: 'auto',
    marginTop: '5%'
  },

  listContainer: {
    width: '50%' // Adjust the width as needed
  },
  inputField: {
    marginBottom: theme.spacing(2),
  },
  Button: {

  }
}));

const SigningEntity = () => {
  const classes = useStyles();
  const [industryName, setIndustryName] = useState('');
  const [industries, setIndustries] = useState([]);
  const [activeIndustries, setActiveIndustries] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!industryName.trim()) return;

    try {
      const response = await axios.post('/api/industries', {
        name: industryName,
        active: false, 
      });

      if (response.status === 201) {
        setIndustries([...industries, industryName]);
        setActiveIndustries([...activeIndustries, false]); // Initialize active state as false
        setIndustryName('');
      } else {
        console.error('Failed to add industry');
      }
    } catch (error) {
      console.error('Error adding industry:', error.message);
    }
  };

  const handleToggle = (index) => {
    const updatedActiveIndustries = [...activeIndustries];
    updatedActiveIndustries[index] = !updatedActiveIndustries[index];
    setActiveIndustries(updatedActiveIndustries);
  };
  const handleChange = (e) => {
  };

  return (
    <div>
        <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        label="Signing Entity"
        variant="outlined"
        className={classes.inputField}
        value={industryName}
        onChange={handleChange}
        required
      />
      <Button variant="contained" 
      color="primary" 
      style={{ backgroundColor: '#5EAFD3', marginTop: '1rem' }} 
      type="submit">
        Signing Entity
      </Button>
    </form>
    <div className={classes.listContainer}>
        <List>
          {industries.map((industry, index) => (
            <ListItem key={index}>
              <ListItemText primary={industry} />
              <ListItemSecondaryAction>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={activeIndustries[index]}
                      onChange={() => handleToggle(index)}
                      color="primary"
                    />
                  }
                  label="Active"
                />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default SigningEntity;
