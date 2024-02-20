import React, { useState } from 'react';
import { AppBar, Tabs, Tab,makeStyles } from '@material-ui/core';
import FinanceApproval from './ApproveProject';
import CreateBusinessUnitForm from './BusinessUnit';
import CreateEngagementType from './EngagementType';
import IndustryAdmin from './IndustryAdmin';
import SigningEntity from './SigningEntity';
import CapabilityAdmin from './CapabilityAdmin';
import '../../styles/finance.css';

const useStyles = makeStyles((theme) => ({
 
}));
const FinanceNavigation = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCreateBusinessUnitSubmit = (businessUnit) => {
    // Implement logic to submit business unit to the server
    console.log('Submitting business unit:', businessUnit);
  };

  return (
    <div className='app-bar'>
      {<AppBar position="static" style={{ backgroundColor: '#152238'}} >
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Finance Approval" />
          <Tab label="Business Unit" />
          <Tab label="Engagement Type" />
          <Tab label="Industry"/>
          <Tab label="Signing Entity"/>
          <Tab label="OCA Capability"/>
        </Tabs>
      </AppBar>
    }
      {value === 0 && <FinanceApproval />} 
      {value === 1 && <CreateBusinessUnitForm onSubmit={handleCreateBusinessUnitSubmit} />}
      {value === 2 && <CreateEngagementType />} 
      {value === 3 && <IndustryAdmin />}
      {value === 4 && <SigningEntity />}
      {value === 5 && <CapabilityAdmin />}
    </div>
  );
};

export default FinanceNavigation;