import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button, Typography, Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  formControl: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const ProjectForm = () => {
  const classes = useStyles();
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [otherData, setOtherData] = useState('');

  useEffect(() => {
    // Simulate fetching countries from an endpoint
    // Replace this with actual API call or data fetching logic
    const fetchCountries = async () => {
      // Example API endpoint for countries
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setCountries(data);
    };

    fetchCountries();
  }, []);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleOtherDataChange = (event) => {
    setOtherData(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted with:', { selectedCountry, otherData });
  };

  return (
    <div className='form-survey'>
      <div className='inst-div'>
      <h2>Instructions</h2>
      <p>Step 1: Select the Tentative Project you would like to confirm from the Project Name field</p>
      <p>Confirm that the client name and project start date and end date is accurate</p>
      <p>Step 3: Fill in other project information accurately and click on the submit button at the end of this form</p>
      <hr/>
      </div>
    <Container className={classes.formContainer}>
      <Typography variant="h5">Form Sections</Typography>

      {/* Country Dropdown */}
      <FormControl className={classes.formControl}>
        <InputLabel>Select Country</InputLabel>
        <Select value={selectedCountry} onChange={handleCountryChange}>
          {countries.map((country) => (
            <MenuItem key={country.id} value={country.id}>
              {country.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Other Dropdowns and Inputs */}
      <FormControl className={classes.formControl}>
        <InputLabel>Select Other Data</InputLabel>
        <Select value={otherData} onChange={handleOtherDataChange}>
          {/* Add options for other data */}
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          {/* Add more options as needed */}
        </Select>
      </FormControl>

      {/* Add more sections, dropdowns, and inputs as needed */}

      {/* Submit Button */}
      <Button variant="contained" color="primary" className={classes.button} onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
    </div>
  );
};

export default ProjectForm;
