import React,{ useContext, useState } from 'react'; 
import { Grid, TextField, Select, MenuItem, InputLabel } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {  useLocation, useNavigate } from 'react-router-dom';
import '../finance/EngagementType';
import '../../styles/finance.css';
import DataContext from '../../state/DataContext';
import { Typography } from '@material-ui/core';
import { useHead } from '../../state/context';
import BasicDatePicker from '../common/DateComponent';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const useStyles = makeStyles((theme) => ({
    form: {
        marginBottom: '5%',
        marginLeft: '5%',
        alignContent: 'center',
        marginRight: '5%',
      },
      grid: {
        margin: '2%',
      }
      
  }));

const ProjectInfoSection = () => {
  // Context data variables from DataContext.js
  const { data } = useContext(DataContext);
  const { data2 } = useContext(DataContext);
  const { data3 } = useContext(DataContext);
  const { data6 } = useContext(DataContext);
  const { head, addHead } = useHead();

const location = useLocation()

const classes = useStyles();
// Selected values from dropdowns
const [selectedOption, setSelectedOption] = useState([]);
const [selectedEngagement, setSelectedEngagement] = useState('');
const [selectedClientType, setSelectedClientType] = useState('');
const [selectedEntity, setselectedEntity] = useState('');
const [selectedCapitalRaise, setSelectedCapitalRaise] = useState('');
const [selectedLargerProject, setSelectedLargerProject] = useState('');
const [selectedProject, setSelectedProject] = useState('');


const [inputValue, setInputValue] = useState('');
const [stageInputValue, setStageInputValue] = useState('');
const [projects, setProjects] = useState([]);
const [projectData, setProjectData] = useState([]);
const [salesOpportunity, setSalesOpportunity] = useState([]);
// const [signingEntity, setSigningEntity] = useState('');
const [inputValue1, setInputValue1] = useState('');
const [inputValue2, setInputValue2] = useState('');
const [inputValue3, setInputValue3] = useState('');
const [inputValue4, setInputValue4] = useState('');
const [inputValue5, setInputValue5] = useState('');


 // Variables for current project details on 10k ft
 const [currentClient, setCurrentClient] = useState('');
 const [currentInput1, setCurrentInput1] = useState('');
 const [currentInput2, setCurrentInput2] = useState('');
 // Variable for changed project details
 const [changeClient, setChangeClient] = useState('');
 const [changeInput1, setChangeInput1] = useState('');
 const [changeInput2, setChangeInput2] = useState('');

const dropdownOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const options = [
    { value: 'yes', label: 'yes' },
    { value: 'no', label: 'no' }
  ]
  const salesOptions = [
    {value: 'proposal', label: 'proposal', stage: 'Q1-2023'},
    {value: 'closed', label: 'closed', stage: 'Q2-2023'},
  ]

  const handleSalesOpportunityChange = (event) => {
    setSalesOpportunity(event.target.value);
  }
  const handleStageInputChange = (event) => {
    setInputValue1(event.target.value);
  };
 const handleProjectNameChange = (event) => {
  setSelectedProject(event.target.value);
  addHead('prjname', event.target.value);
 }

  const handleCurrentClient = (event) => {
    setCurrentClient(data6.client);
    addHead('client1', event.target.value);
  }
  const handleCurrentInput1 = (event) => {
    setCurrentInput1(event.target.value);
    addHead('startdate1', event.target.value)
  }

  const handleCurrentInput2 = (event) => {
    setCurrentInput2(event.target.value);
    addHead('enddate1', event.target.value);
  }

  const handleChangeClient = (event) => {
    setChangeClient(event.target.value);
    addHead('client2', event.target.value);
  }
  const handleChangeInput1 = (event) => {
    setChangeInput1(event.target.value);
    addHead('startdate2', event.target.value);
  }

  const handleChangeInput2 = (event) => {
    setChangeInput2(event.target.value);
    addHead('enddate2', event.target.value);
  }

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  console.log(data6);


  return (
    <div className='project-info' style={{ marginLeft: '15%'}}>
      <div className="info-div">
    <Typography variant='h6'>Instructions</Typography>
    <p>Step 1: Select the Tentative Project you would like to confirm from the Project Name field</p>
    <p>Step 2:Confirm that the client name and project start date and end date is accurate</p>
    <p>Step 3: Fill in other project information accurately and click on the submit button at the end of this form</p>
    <hr/>
    </div>
    <form className={classes.form}>
    <Grid container spacing={2} className={classes.grid}>
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
            variant="outlined"
            fullWidth
            value={salesOpportunity.stage}
            onChange={ handleStageInputChange }
            disabled
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} direction="row">
      <Grid item xs={6}>
      <InputLabel htmlFor="dropdown">Project name</InputLabel>
      <Select
        id="dropdown"
        value={head.prjname && head.prjname}
        onChange={handleProjectNameChange}
        label="Select an option"
        fullWidth
      >
        {data6.map((option) => (
          <MenuItem key={option.name} value={option.name}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
      </Grid>
      <Typography>*These are the current details from 10k ft.Please confirm if accurate</Typography>
        <Grid container spacing={2} margin={'auto'}>
        <Grid item xs={4}>
        <InputLabel htmlFor="dropdown">Client Name</InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="input-field"
            variant="outlined"
            fullWidth
            value={head.client1 && head.client1}
            onChange={handleCurrentClient}
            disabled
          />
      </Grid>
      </Grid>
      <Grid item xs={4}>
        <InputLabel htmlFor="dropdown">Project Start Date</InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="input-field"
            variant="outlined"
            fullWidth
            value={head.startdate1 && head.startdate1}
            onChange={handleCurrentInput1}
            disabled
          />
      </Grid>
      <Grid item xs={4}>
        <InputLabel htmlFor="dropdown">Project End Date</InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="input-field"
            variant="outlined"
            fullWidth
            value={head.enddate1 && head.enddate1}
            onChange={handleCurrentInput2}
            disabled
          />
      </Grid>
      </Grid>
      <Typography>*If the information above is incorrect, please input the correct information below:</Typography>
      <Grid container spacing={2} margin={'auto'}>
        <Grid item xs={4}>
        <InputLabel htmlFor="dropdown">Client Name</InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="input-field"
            variant="outlined"
            fullWidth
            value={head.client2 && head.client2}
            onChange={handleChangeClient }
            disabled
          />
      </Grid>

      <Grid item xs={4}>
        <InputLabel htmlFor="dropdown">Project Start Date</InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="input-field"
            variant="outlined"
            fullWidth
            value={head.startdate2 && head.startdate2}
            onChange={handleChangeInput1}
          />
      </Grid>
      <Grid item xs={4}>
        <InputLabel htmlFor="dropdown">Project End Date</InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="input-field"
            variant="outlined"
            fullWidth
            value={head.enddate2 && head.enddate2}
            onChange={handleChangeInput2}
          />
      </Grid>
           {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          fullWidth
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="start-date"
          label="Start Date"
          value={head.startdate2 && head.startdate2}
          // onChange={handleChangeInput1}
          KeyboardButtonProps={{
            'aria-label': 'change start date',
          }}
        />
        <KeyboardDatePicker
          fullWidth
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="end-date"
          label="End Date"
          value={head.enddate2 && head.enddate2}
          // onChange={handleChangeInput2}
          KeyboardButtonProps={{
            'aria-label': 'change end date',
          }}
        />
      </MuiPickersUtilsProvider> */}
      </Grid>
    </form>
    </div>
  );
};

export default ProjectInfoSection;
