import React, { useEffect, useState } from 'react';
import { AppBar, Tabs, Tab,makeStyles, Grid, List, ListItem, ListItemText } from '@material-ui/core';
import FinanceApproval from './ApproveProject';
import CreateBusinessUnitForm from './BusinessUnit';
import CreateEngagementType from './EngagementType';
import IndustryAdmin from './IndustryAdmin';
import SigningEntity from './SigningEntity';
import CapabilityAdmin from './CapabilityAdmin';
import CreateClientType from './ClientType';
import PracticumSupport from './PracticumSupport';
import '../../styles/finance.css';
import LandingPage from '../navigation/LandingPage';
import BusinessUnitList from './BusinessUnitList';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
 
}));
const FinanceNavigation = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    localStorage.setItem('currentTab', value.toString());
  }, [value])

  useEffect(() => {
    const savedValue = localStorage.getItem('currentTab');
    if (savedValue !== null) {
      setValue(parseInt(savedValue));
    }
  }, []);

  const handleCreateBusinessUnitSubmit = (businessUnit) => {
    // Endpoint to submit client type data to database
    console.log('Submitting business unit:', businessUnit);
  };

  return (
    <div>
    <div className='app-bar' style={{ width: 'fit-content'}}>
      <List>
        <Typography variant='h5'>Finance Setup</Typography>
        <hr/>
        <ListItem button component={Link} to="/business-unit">
        <ListItemText primary='Business Unit List'/>
        </ListItem>
        <ListItem button component={Link} to="/engagement-list">
        <ListItemText primary='Engagement Type'/>
        </ListItem>
        <ListItem button component={Link} to="/industry">
        <ListItemText primary='Industry'/>
        </ListItem>
        <ListItem button component={Link} to="/entity-list">
        <ListItemText primary='Signing Entity'/>
        </ListItem>
        <ListItem button component={Link} to="/client-list">
        <ListItemText primary='Client Type'/>
        </ListItem>
        <ListItem button component={Link} to="/business-unit">
        <ListItemText primary='OCA Capability'/>
        </ListItem>
        <ListItem button component={Link} to="/business-unit">
        <ListItemText primary='Practicum Support'/>
        </ListItem>
      </List>
      {/* <AppBar position="static" style={{ backgroundColor: '#152238'}} > */}
      {/* <Grid container style={{ }}>
        <Grid item xs={4} style={{ marginTop: '4%'}}>
          <Typography style={{ marginLeft: '22%', fontWeight:'bold'}}>Finance Setup</Typography>
        <Tabs 
        value={value} 
        orientation="vertical"
        variant="scrollable"
        onChange={handleChange}>
          <Tab label="Business Unit" />
          <Tab label="Engagement Type" />
          <Tab label="Industry"/>
          <Tab label="Signing Entity"/>
          <Tab label="OCA Capability"/>
          <Tab label="Client Type"/>
          <Tab label="Practicum Support"/>
        </Tabs>
        </Grid> */}
    
      {/* </AppBar>
    } */}
    {/* <Grid item xs={9}> */}
    {/* <div style={{ padding: '20px'}}>
      {value === 0 && <div><BusinessUnitList/></div>}
      {value === 1 && <div><CreateEngagementType /></div>} 
      {value === 2 && <div><IndustryAdmin /></div>}
      {value === 3 && <div><SigningEntity /></div>}
      {value === 4 && <div><CapabilityAdmin /></div>}
      {value === 5 && <div><CreateClientType/></div>}
      {value === 6 && <div><PracticumSupport/></div>}
      </div> */}
      {/* </Grid>
      </Grid> */}
    </div>
    </div>
  );
};

export default FinanceNavigation;