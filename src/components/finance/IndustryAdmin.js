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
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(4),
    marginLeft: '25%',
    marginRight: '25%'
  },
  listContainer: {
    width: '50%', // Adjust the width as needed
    margin: 'auto',
  },
  inputField: {
    marginBottom: theme.spacing(2),
  },
}));

const IndustryAdmin = () => {
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

  return (
    <div>
      <form className={classes.formContainer} onSubmit={handleSubmit}>
        <TextField
          label="Industry Name"
        variant="outlined"
        className={classes.inputField}
          value={industryName}
          onChange={(e) => setIndustryName(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: '#5EAFD3', marginTop: '1rem' }}
          type="submit"
        >
          Add Industry
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

export default IndustryAdmin;
