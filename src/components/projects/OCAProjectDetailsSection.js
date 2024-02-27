import React, { useState } from 'react';
import { Typography, Grid, Select, MenuItem, InputLabel } from '@mui/material';

import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
    form: {
        marginBottom: '5%',
        marginLeft: '5%',
        marginRight: '10%',
      },
  }));
const OCAProjectDetailsSection = () => {
    const classes = useStyles();

    const [inputValue, setInputValue] = useState('');
    const dropdownOptions = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ];
      const [selectedOption, setSelectedOption] = useState('');
      const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
      };

    const [projectSummary, setProjectSummary] = useState('');
return(
    <div className='oca-det'>
        <Typography fontWeight={'bold'}>OCA Project Details</Typography>
        <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
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
        onChange={(e) => setProjectSummary(e.target.value)}
      />
      </Grid>
      </Grid>
        </form>
    </div>
)
}

export default OCAProjectDetailsSection;