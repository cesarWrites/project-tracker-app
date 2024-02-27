import React,{ useState } from 'react'; 
import { Grid, TextField, Select, MenuItem, InputLabel } from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
    form: {
        marginBottom: '5%',
        marginLeft: '5%',
        alignContent: 'center',
      },
      
  }));

const ProjectInfoSection = ({ formData, setFormData }) => {

const classes = useStyles();
const [selectedOption, setSelectedOption] = useState('');
const [inputValue, setInputValue] = useState('');
const [stageInputValue, setStageInputValue] = useState('');
const [projects, setProjects] = useState([]);
const [projectData, setProjectData] = useState([]);
const [salesOpportunity, setSalesOpportunity] = useState('');
const [signingEntity, setSigningEntity] = useState('');
const [capitalRaise, setCapitalRaise] = useState('');
const [inputValue1, setInputValue1] = useState('');
const [inputValue2, setInputValue2] = useState('');
const [inputValue3, setInputValue3] = useState('');
const [inputValue4, setInputValue4] = useState('');
const [inputValue5, setInputValue5] = useState('');

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

  const handleStageInputChange = (event) => {
    setInputValue1(event.target.value);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='project-info'>
    <h2>Instructions</h2>
    <p>Step 1: Select the Tentative Project you would like to confirm from the Project Name field</p>
    <p>Confirm that the client name and project start date and end date is accurate</p>
    <p>Step 3: Fill in other project information accurately and click on the submit button at the end of this form</p>
    <hr/>
    <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
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
        {/* <Grid item xs={6}>
          <InputLabel htmlFor="projectSummary">Project Summary</InputLabel>
          <TextField
            id="projectSummary"
            name="projectSummary"
            value={formData.projectSummary}
            onChange={handleChange}
            fullWidth
          />
        </Grid> */}

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
    </form>
    </div>
  );
};

export default ProjectInfoSection;
