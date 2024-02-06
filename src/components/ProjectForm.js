import React, { useState } from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Grid, Typography, Button } from '@mui/material';
import '../styles/survey.css';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  submitButton: {
    backgroundColor: '#5EAFD3',
    color: '#fff',
    marginTop: '2%'
  },
}));

const ProjectForm = () => {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');

  // Simulated data from the database
  const dropdownOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const dropdownOption2 = [
    { value: 'yes', label: 'yes' },
    { value: 'no', label: 'no' }
  ]

  const dropdownCountry1 = [
    { value: 'Kenya', label: 'Kenya'},
    { value: 'Uganda', label: 'Uganda'},
    { value: 'Zambia', label: 'Zambia' },
    { value: 'Mauritius', label: 'Mauritius' },
    { value: 'Nigeria', label: 'Nigeria' }
  ]
  const dropdownCountry2 = [
    { value: 'Kenya', label: 'Kenya'},
    { value: 'Uganda', label: 'Uganda'},
    { value: 'Zambia', label: 'Zambia' },
    { value: 'Mauritius', label: 'Mauritius' },
    { value: 'Nigeria', label: 'Nigeria' }
  ]

  const handleDropDownChangeTwo = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='form-survey'>
    <h2>Instructions</h2>
    <p>Step 1: Select the Tentative Project you would like to confirm from the Project Name field</p>
    <p>Confirm that the client name and project start date and end date is accurate</p>
    <p>Step 3: Fill in other project information accurately and click on the submit button at the end of this form</p>
    <hr/>

    <div className='salesforce-opportunity'>
    <Grid container spacing={2}>
        <Grid item xs={6}>
          <InputLabel htmlFor="dropdown">Salesforce Opportunity</InputLabel>
          <Select
            id="dropdown1"
            value={selectedOption}
            onChange={handleDropdownChange}
            label="Select an option"
            fullWidth
          >
            {dropdownOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={6}>
        <InputLabel htmlFor="dropdown">Stage</InputLabel>
          <TextField
            id="input-field"
            label="Q1-2023"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </div>
    <form className='project-det-form'>
      <div className='project-details'>
      <div className='project-info'>
      <Typography fontWeight={'bold'}>Project Information</Typography>
      <Grid container spacing={2} margin={'auto'}>
        <Grid xs={4}>
      <InputLabel htmlFor="dropdown">Project name</InputLabel>
      </Grid>
      <Grid xs={8}>
      <Select
        id="dropdown"
        value={selectedOption}
        onChange={handleDropdownChange}
        label="Select an option"
        fullWidth
      >
        {dropdownOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      </Grid>
      </Grid>
      <Grid container spacing={2} margin={'auto'}>
        <Grid xs={4}>
      <InputLabel htmlFor="dropdown">Is it part of a larger project</InputLabel>
      </Grid>
      <Grid xs={8}>
      <Select
        id="dropdown"
        value={selectedOption}
        onChange={handleDropdownChange}
        label="Select an option"
        fullWidth
      >
        {dropdownOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      </Grid>
      </Grid>
      <Grid container spacing={2} margin={'auto'}>
      <Grid xs={4}>
      <InputLabel htmlFor="dropdown">Client type</InputLabel>
      </Grid>
      <Grid xs={8}>
      <Select
        id="dropdown"
        value={selectedOption}
        onChange={handleDropdownChange}
        label="Select an option"
        fullWidth
      >
        {dropdownOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      </Grid>
      </Grid>
      <Grid container spacing={2} margin={'auto'}>
      <Grid xs={4}>
      <InputLabel htmlFor="dropdown">Engagement type</InputLabel>
      </Grid>
      <Grid xs={8}>
      <Select
        id="dropdown"
        value={selectedOption}
        onChange={handleDropdownChange}
        label="Select an option"
        fullWidth
      >
        {dropdownOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      </Grid>
      </Grid>
      <Grid container spacing={2} margin={'auto'}>
      <Grid xs={4}>
      <InputLabel htmlFor="dropdown">OCA entity involved in signing the contract</InputLabel>
      </Grid>
      <Grid xs={8}>
      <Select
        id="dropdown"
        value={selectedOption}
        onChange={handleDropdownChange}
        label="Select an option"
        fullWidth
      >
        {dropdownOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      </Grid>
      </Grid>
      <Grid container spacing={2} margin={'auto'}>
      <Grid xs={4}>
      <InputLabel htmlFor="dropdown">Does it include a capital raise component</InputLabel>
      </Grid>
      <Grid xs={8}>
      <Select
        id="dropdown"
        value={selectedOption}
        onChange={handleDropDownChangeTwo}
        label="Select an option"
        fullWidth
      >
        {dropdownOption2.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      </Grid>
      </Grid>
      <Grid container spacing={2} margin={'auto'}>
      <Grid xs={4}>
      <InputLabel htmlFor="dropdown">Client's main country of operation</InputLabel>
      </Grid>
      <Grid xs={8}>
      <Select
        id="dropdown-country1"
        value={selectedOption}
        onChange={handleDropdownChange}
        label="Select an option"
        fullWidth
      >
        {dropdownCountry1.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      </Grid>
      </Grid>
      <Grid container spacing={2} margin={'auto'}>
      <Grid xs={4}>
      <InputLabel htmlFor="dropdown">Client's secondary country of operations</InputLabel>
      </Grid>
      <Grid xs={8}>
      <Select
        id="dropdown-country2"
        value={selectedOption}
        onChange={handleDropdownChange}
        label="Select an option"
        fullWidth
      >
        {dropdownCountry2.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      </Grid>
      </Grid>
      <Grid container spacing={2} margin={'auto'}>
      <Grid xs={4}>
      <InputLabel htmlFor="dropdown">Is the business located in a rural location or buy/sell in rural areas?</InputLabel>
      </Grid>
      <Grid xs={8}>
      <Select
        id="dropdown"
        value={selectedOption}
        onChange={handleDropdownChange}
        label="Select an option"
        fullWidth
      >
        {dropdownOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      </Grid>
      </Grid>
      <Grid container spacing={2} margin={'auto'}>
      <Grid xs={4}>
      <InputLabel htmlFor="dropdown">Industry</InputLabel>
      </Grid>
      <Grid xs={8}>
      <Select
        id="dropdown"
        value={selectedOption}
        onChange={handleDropdownChange}
        label="Select an option"
        fullWidth
      >
        {dropdownOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      </Grid>
      </Grid>

      <Grid container spacing={2} margin={'auto'}>
      <Grid xs={4}>
      <InputLabel htmlFor="dropdown">Secondary industry</InputLabel>
      </Grid>
      <Grid xs={8}>
      <Select
        id="dropdown"
        value={selectedOption}
        onChange={handleDropdownChange}
        label="Select an option"
        fullWidth
      >
        {dropdownOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      </Grid>
      </Grid>
   
      <Grid container spacing={2} margin={'auto'}>
      <Grid xs={4}>
      <InputLabel htmlFor="dropdown">Business unit*</InputLabel>
      </Grid>
      <Grid xs={8}>
      <Select
        id="dropdown"
        value={selectedOption}
        onChange={handleDropdownChange}
        label="Select an option"
        fullWidth
      >
        {dropdownOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      </Grid>
      </Grid>
      <hr className='hr-horizontal'/>
      <Typography fontWeight={'bold'}>OCA Project Details</Typography>
      <Grid container spacing={2} margin={'auto'}>
      <Grid xs={4}>
      <InputLabel htmlFor="dropdown">OCA capability 1</InputLabel>
      </Grid>
      <Grid xs={8}>
      <Select
        id="dropdown"
        value={selectedOption}
        onChange={handleDropdownChange}
        label="Select an option"
        fullWidth
      >
        {dropdownOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      </Grid>
      </Grid>
   
      <Grid container spacing={2} margin={'auto'}>
      <Grid xs={4}>
      <InputLabel htmlFor="dropdown">OCA capability 2</InputLabel>
      </Grid>
      <Grid xs={8}>
      <Select
        id="dropdown"
        value={selectedOption}
        onChange={handleDropdownChange}
        label="Select an option"
        fullWidth
      >
        {dropdownOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      </Grid>
      </Grid>
      <Grid container spacing={2} margin={'auto'}>
      <Grid xs={4}>
      <InputLabel htmlFor="textfield">Project summary (1-2 phrases)</InputLabel>
      </Grid>
      <Grid xs={8}>
      <textarea
        id="input-field"
        variant="outlined"
        fullWidth
        width={'1'}
        value={inputValue}
        onChange={handleInputChange}
      />
      </Grid>
      </Grid>
      <hr className='hr-horizontal'/>
        <Typography fontWeight={'bold'}>Key client contact</Typography>
        <Grid container spacing={2} margin={'auto'}>
        <Grid item xs={4}>
        <InputLabel htmlFor="dropdown">Full name</InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="input-field"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} margin={'auto'}>
        <Grid item xs={4}>
        <InputLabel htmlFor="email">Email address</InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="email-input"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      </div>
        <div className='confirm-project'>
        <Typography>*These are the current details from 10k ft.Please confirm if accurate</Typography>
        <Grid container spacing={2} margin={'auto'}>
        <Grid item xs={4}>
        <InputLabel htmlFor="email">Client Name</InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="email-input"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} margin={'auto'}>
        <Grid item xs={4}>
        <InputLabel htmlFor="email">Project Start Date</InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="email-input"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} margin={'auto'}>
        <Grid item xs={4}>
        <InputLabel htmlFor="email">Project End Date </InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="email-input"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Typography>*If the information above is incorrect, please input the correct information below:</Typography>
        <Grid container spacing={2} margin={'auto'}>
        <Grid item xs={4}>
        <InputLabel htmlFor="email">Client Name</InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="email-input"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} margin={'auto'}>
        <Grid item xs={4}>
        <InputLabel htmlFor="email">Project Start Date</InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="email-input"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} margin={'auto'}>
        <Grid item xs={4}>
        <InputLabel htmlFor="email">Project End Date </InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="email-input"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <section className='prj-key'>
        <h2>Key</h2>
        <p> O- OCA</p>
        <p>A- Arcadia placement</p>
      </section>
      <section className='prj-placement'>
      <Grid container spacing={2} margin={'auto'}>
        <Grid item xs={4}>
        <InputLabel htmlFor="email">Primary support the analyst will be providing</InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="email-input"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} margin={'auto'}>
        <Grid item xs={4}>
        <InputLabel htmlFor="email">Secondary support the analyst will be providing </InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="email-input"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
        <Grid container spacing={2} margin={'auto'}>
        <Grid item xs={4}>
        <InputLabel htmlFor="email">In which city will the analyst be based?</InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="email-input"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      </section>
        </div>
      </div>
      <Button type="submit" 
        fullWidth 
        variant="contained" 
        color="primary"
        className={classes.submitButton}>
          Submit
        </Button>
    </form>
    </div>
  );
};

export default ProjectForm;