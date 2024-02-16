import React, { useState } from 'react';
import { AppBar, Tabs, Tab,makeStyles } from '@material-ui/core';
import FinanceApproval from './ApproveProject';
import CreateBusinessUnitForm from './BusinessUnit';
import CreateEngagementType from './EngagementType';
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
          <Tab label="Create Business Unit" />
          <Tab label="Finance Approval" />
          <Tab label="Engagement Type" />
        </Tabs>
      </AppBar>
    }
      {value === 0 && <CreateBusinessUnitForm onSubmit={handleCreateBusinessUnitSubmit} />}
      {value === 1 && <FinanceApproval />} 
      {value === 2 && <CreateEngagementType />} 
    </div>
  );
};

export default FinanceNavigation;