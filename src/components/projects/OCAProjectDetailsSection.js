import React, { useContext,useState } from 'react';
import { Typography, Grid, Select, MenuItem, InputLabel, TextField } from '@mui/material';
import DataContext from '../../state/DataContext';
import { useHead } from '../../state/context';

import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
    form: {
        marginBottom: '5%',
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '2%',
      },
      grid:{
        marginRight: '2%',
      }
  }));
const OCAProjectDetailsSection = () => {
    const classes = useStyles();

    const { data1 } = useContext(DataContext);
    const { data4 } = useContext(DataContext);
    const { data5 } = useContext(DataContext);
    const { data } = useContext(DataContext);
    const { data2 } = useContext(DataContext);
    const { data3 } = useContext(DataContext);
    const { head, addHead } = useHead();

    const [selectedCountry1, setselectedCountry1] = useState('');
    const [selectedCountry2, setselectedCountry2] = useState('');
    const [selectedLocation, setselectedLocation] = useState('');
    const [selectedIndustry1, setSelectedIndustry1] = useState('');
    const [selectedIndustry2, setSelectedIndustry2] = useState('');
    const [selectedUnit, setSelectedUnit] = useState('');
    const [selectedCapability1, setSelectedCapability1] = useState('');
    const [selectedCappability2, setSelectedCapability2] = useState('');

const [selectedEngagement, setSelectedEngagement] = useState('');
const [selectedClientType, setSelectedClientType] = useState('');
const [selectedEntity, setselectedEntity] = useState('');
const [selectedCapitalRaise, setSelectedCapitalRaise] = useState('');
const [selectedLargerProject, setSelectedLargerProject] = useState('');
const [inputValue1, setInputValue1] = useState('');

    const [text, setText] = useState(''); // Project summary text
    const maxLength = 1000; // Maximum length of characters on text area

    const dropdownCountry1 = [
      { value: 'Kenya', label: 'Kenya'},
      { value: 'Uganda', label: 'Uganda'},
      { value: 'Zambia', label: 'Zambia' },
      { value: 'Mauritius', label: 'Mauritius' },
      { value: 'Nigeria', label: 'Nigeria' }
    ]

    const options = [
      { value: 'yes', label: 'yes' },
      { value: 'no', label: 'no' }
    ]

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

    const handleCountryOneChange = (event) => {
      setselectedCountry1(event.target.value);
      addHead('country1', event.target.value)
    }

    const handleCountryTwoChange = (event) => {
      setselectedCountry2(event.target.value);
      addHead('country2', event.target.value);
    }

    const handleLocationChange = (event) => {
      setselectedLocation(event.target.value);
      addHead('location', event.target.value);
    }

    const handleIndustryOneChange = (event) => {
      setSelectedIndustry1(event.target.value);
      addHead('industry1', event.target.value);
    }

    const handleIndustryTwoChange = (event) => {
      setSelectedIndustry2(event.target.value);
      addHead('industry2', event.target.value);
    }

    const handleBusinessUnitChange = (event) => {
      setSelectedUnit(event.target.value);
      addHead('businessUnit', event.target.value);
    }
    
    const handleCapabilityOneChange = (event) => {
      setSelectedCapability1(event.target.value);
      addHead('capability1', event.target.value)
    }
    const handleCapabilityTwoChange = (event) => {
      setSelectedCapability2(event.target.value);
      addHead('capability2', event.target.value);
    }

    // Handle project summary change
    const handleSummaryChange = (event) => {
      setText(event.target.value);
      addHead('summary', event.target.value)
    }

    const handlePartofLargerProject = (event) => {
      setSelectedLargerProject(event.target.value);
      addHead('larger', event.target.value);
     }
      const handleCapitalRaiseChange = (event) => {
        setSelectedCapitalRaise(event.target.value);
        addHead('capital', event.target.value);
      }
    
    
      // Handle Selection for engagement type
      const handleEngagementChange = (event) => {
        setSelectedEngagement(event.target.value);
        addHead('engagement', event.target.value);
      }
    
      // Handle selection for client type
  const handleClientTypeChange = (event) => {
    setSelectedClientType(event.target.value);
    addHead('client', event.target.value);
  }

  // Handle selection for signing entity
  const handleSigningEntityChange = (event) => {
    setselectedEntity(event.target.value);
    addHead('entity', event.target.value);
  }
return(
    <div className='oca-det' style={{ marginLeft: '15%', marginTop: '2%'}}>
    <Typography fontWeight={'bold'}>OCA Project Details</Typography>
    <div className={classes.form}>
    <Grid container  spacing={2} className={classes.grid}>
    <Grid item xs={6}>
      <InputLabel htmlFor="dropdown">Client's main country of operation</InputLabel>
      <Select
        id="dropdown-country1"
        value={head.country1 && head.country1 }
        onChange={handleCountryOneChange}
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
      <Grid  item xs={6}>
      <InputLabel htmlFor="dropdown">Client's secondary country of operations</InputLabel>
      <Select
        id="dropdown-country2"
        value={head.country2 && head.country2}
        onChange={handleCountryTwoChange}
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
      <Grid item xs={6}>
      <InputLabel htmlFor="dropdown">Is the business located in a rural location or buy/sell in rural areas?</InputLabel>
      <Select
        id="dropdown"
        value={head.location && head.location}
        onChange={handleLocationChange}
        label="Select an option"
        fullWidth
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      </Grid>
      <Grid item xs={6}>
      <InputLabel htmlFor="dropdown">Industry</InputLabel>
      <Select
        id="dropdown"
        value={head.industry1 && head.industry1}
        onChange={handleIndustryOneChange}
        label="Select an option"
        fullWidth
      >
        {data1.map((option) => (
          <MenuItem key={option.industry} value={option.industry}>
            {option.industry}
          </MenuItem>
        ))}
      </Select>
      </Grid>
      <Grid item xs={6}>
      <InputLabel htmlFor="dropdown">Secondary industry</InputLabel>
      <Select
        id="dropdown"
        value={head.industry2 && head.industry2}
        onChange={ handleIndustryTwoChange}
        label="Select an option"
        fullWidth
      >
        {data1.map((option) => (
          <MenuItem key={option.industry} value={option.industry}>
            {option.industry}
          </MenuItem>
        ))}
      </Select>
      </Grid>
      <Grid item xs={6}>
      <InputLabel htmlFor="dropdown">Business unit*</InputLabel>
      <Select
        id="dropdown"
        value={head.businessUnit && head.businessUnit}
        onChange={handleBusinessUnitChange}
        label="Select an option"
        fullWidth
      >
        {data4.map((option) => (
          <MenuItem key={option.entity} value={option.entity}>
            {option.entity}
          </MenuItem>
        ))}
      </Select>
      </Grid>
      <Grid item xs={6}>
      <InputLabel htmlFor="dropdown">OCA capability 1</InputLabel>
      <Select
        id="dropdown"
        value={head.capability1 && head.capability1}
        onChange={handleCapabilityOneChange}
        label="Select an option"
        fullWidth
      >
        {data5.map((option) => (
          <MenuItem key={option.type} value={option.type}>
            {option.type}
          </MenuItem>
        ))}
      </Select>
      </Grid>
      <Grid item xs={6}>
      <InputLabel htmlFor="dropdown">OCA capability 2</InputLabel>
      <Select
        id="dropdown"
        value={head.capability2 && head.capability2}
        onChange={handleCapabilityTwoChange}
        label="Select an option"
        fullWidth
      >
        {data5.map((option) => (
          <MenuItem key={option.type} value={option.type}>
            {option.type}
          </MenuItem>
        ))}
      </Select>
      </Grid>
      <Grid item xs={6}>
      <InputLabel htmlFor="dropdown">Is it part of a larger project</InputLabel>
      <Select
        id="dropdown"
        value={head.larger && head.larger}
        onChange={handlePartofLargerProject}
        label="Select an option"
        fullWidth
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      </Grid>
      <Grid item xs={6}>
      <InputLabel htmlFor="dropdown">Client type</InputLabel>
      <Select
        id="dropdown"
        value={head.client && head.client}
        onChange={handleClientTypeChange}
        label="Select an option"
        fullWidth
      >
        {data2.map((option) => (
          <MenuItem key={option.type} value={option.type}>
            {option.type}
          </MenuItem>
        ))}
      </Select>
      </Grid>
      <Grid item xs={6}>
      <InputLabel htmlFor="dropdown">Engagement type</InputLabel>
      <Select
        id="dropdown"
        value={head.engagement && head.engagement}
        onChange={handleEngagementChange}
        label="Select an option"
        fullWidth
      >
        {data.map((option) => (
          <MenuItem key={option.id} value={option.type}>
            {option.type}
          </MenuItem>
        ))}
      </Select>
      </Grid>
      <Grid item xs={6}>
      <InputLabel htmlFor="dropdown">OCA entity involved in signing the contract</InputLabel>
      <Select
        id="dropdown-ent"
        value={head.entity && head.entity}
        onChange={handleSigningEntityChange}
        label="Select an option"
        fullWidth
      >
        {data3.map((option) => (
          <MenuItem key={option.entity} value={option.entity}>
            {option.entity}
          </MenuItem>
        ))}
      </Select>
      </Grid>
      <Grid item xs={6}>
      <InputLabel htmlFor="dropdown">Does it include a capital raise component</InputLabel>
      <Select
        id="dropdown-cp"
        value={head.capital && head.capital}
        onChange={handleCapitalRaiseChange}
        label="Select an option"
        fullWidth
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      </Grid>
      <Grid item xs={6}>
      <InputLabel htmlFor="textfield">Project summary (1-2 phrases)</InputLabel>
      <TextField
        multiline
        fullWidth
        variant="outlined"
        label= "Project Summary ..."
        value={head.summary && head.summary}
        onChange={handleSummaryChange}
        inputProps={{ maxLength: maxLength }}
      />
      <div>
        Characters Remaining: {maxLength - text.length}/{maxLength}
      </div>
      </Grid>
      </Grid>
        </div>
    </div>
)
}

export default OCAProjectDetailsSection;