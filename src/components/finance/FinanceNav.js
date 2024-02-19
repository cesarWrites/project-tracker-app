import React, { useState } from 'react';
import { AppBar, Tabs, Tab,makeStyles } from '@material-ui/core';
import FinanceApproval from './ApproveProject';
import CreateBusinessUnitForm from './BusinessUnit';
import CreateEngagementType from './EngagementType';
import IndustryAdmin from './IndustryAdmin';
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
      {<AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Finance Approval" />
          <Tab label="Business Unit" />
          <Tab label="Engagement Type" />
          <Tab label="Industry"/>
        </Tabs>
      </AppBar>
    }
      {value === 0 && <FinanceApproval />} 
      {value === 1 && <CreateBusinessUnitForm onSubmit={handleCreateBusinessUnitSubmit} />}
      {value === 2 && <CreateEngagementType />} 
      {value === 3 && <IndustryAdmin />}
    </div>
  );
};

export default FinanceNavigation;