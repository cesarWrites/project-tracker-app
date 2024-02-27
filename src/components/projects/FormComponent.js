import React, { useState, useEffect } from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Grid, Typography, Button } from '@mui/material';
import '../../styles/survey.css';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  submitButton: {
    backgroundColor: '#5EAFD3',
    color: '#fff',
    marginTop: '2%',
    marginLeft: '60%',
    padding: '44%',
    alignContent: 'center'
  },
}));

const ProjectForm = () => {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [stageInputValue, setStageInputValue] = useState('');
  const [projects, setProjects] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [salesOpportunity, setSalesOpportunity] = useState('');
  const [projectSummary, setProjectSummary] = useState('');
  const [signingEntity, setSigningEntity] = useState('');
  const [capitalRaise, setCapitalRaise] = useState('');
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue4, setInputValue4] = useState('');
  const [inputValue5, setInputValue5] = useState('');

  // Simulated data from the database
  const dropdownOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const entityOptions = [
    { value: 'kenya', label: 'kenya'},
    { value: 'Mauritius', label: 'Mauritius'},
    { value: 'Uganda', label: 'Uganda'}
  ];

  const capitalOptions = [
    { value: 'yes', label: 'yes' },
    { value: 'no', label: 'no' }
  ]
  const salesOptions = [
    {value: 'proposal', label: 'proposal'},
    {value: 'closed', label: 'closed'},
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

  const handleSalesOpportunityChange = (event) => {
    setSalesOpportunity(event.target.value);
  }

  const handleSigningEntityChange = (event) => {
    setSigningEntity(event.target.value);
  }
  const handleCapitalRaiseChange = (event) => {
    setCapitalRaise(event.target.value);
  }
  const handleDropDownChangeTwo = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleStageInputChange = (event) => {
    setInputValue1(event.target.value);
  };

  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };
  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  const handleStageInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };
  
  const handleInputChange3 = (event) => {
    setInputValue3(event.target.value);
  };
  const handleInputChange4 = (event) => {
    setInputValue4(event.target.value);
  };
  const handleInputChange5 = (event) => {
    setInputValue5(event.target.value);
  };
 
  useEffect(() => {
    // Fetch project data from the server when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error.message);
      }
    };

    fetchData();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/projects', projectData);
      console.log(response.data);
    } catch (error) {
      console.error('Signup error:', error.message);
    }
  console.log('Project submitted:', projectData);
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
            id="dropdown-sf"
            value={salesOpportunity}
            onChange={handleSalesOpportunityChange}
            label="Select an option"
            fullWidth
          >
            {salesOptions.map((option) => (
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
            value={stageInputValue}
            onChange={ handleStageInputChange }
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
        id="dropdown-ent"
        value={signingEntity}
        onChange={handleSigningEntityChange}
        label="Select an option"
        fullWidth
      >
        {entityOptions.map((option) => (
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
        id="dropdown-cp"
        value={capitalRaise}
        onChange={handleCapitalRaiseChange}
        label="Select an option"
        fullWidth
      >
        {capitalOptions.map((option) => (
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
        onChange={(e) => setProjectSummary(e.target.value)}
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
            value={inputValue1}
            onChange={handleInputChange1}
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
            value={inputValue2}
            onChange={handleInputChange2}
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
            onChange={handleInputChange3}
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
            onChange={handleInputChange4}
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
            onChange={handleInputChange4}
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
        <InputLabel htmlFor="end date">Project End Date </InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="end-date"
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
      <section className='loe-info'>
      <Grid container spacing={2} margin={'auto'}>
      <Grid xs={4}>
      <InputLabel htmlFor="dropdown">Have you previously provided budget LOE via the project code survey? (i.e., if part of a larger project)</InputLabel>
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
      <Typography fontWeight={'bold'}>Budget LOE</Typography>
      <Grid container spacing={2} margin={'auto'}>
        <Grid item xs={4}>
        <InputLabel htmlFor="email">Budget LOE (Approved by AP for 300K or Partner for 300K)</InputLabel>
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
        <InputLabel htmlFor="email">Partner</InputLabel>
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
        <InputLabel htmlFor="email">Associate Partner</InputLabel>
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
        <InputLabel htmlFor="email">Associate Partner</InputLabel>
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
        <InputLabel htmlFor="email">Principal</InputLabel>
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
        <InputLabel htmlFor="email">Senior PL/Senior TL</InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="email-input"
            variant="outlined"
            fullWidth
            value={''}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} margin={'auto'}>
        <Grid item xs={4}>
        <InputLabel htmlFor="email">Project Leader/Transaction Leader</InputLabel>
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
        <InputLabel htmlFor="email">(S) Associate</InputLabel>
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
        <InputLabel htmlFor="email">(S) Analyst</InputLabel>
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
        <Grid item xs={12} marginLeft={50}>
        <Button
          variant="contained"
          color="primary"
          className={classes.submitButton}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Grid>
    </form>
    </div>
  );
};

export default ProjectForm;