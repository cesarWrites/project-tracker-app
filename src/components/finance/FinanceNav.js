import React, { useState } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import FinanceApproval from './ApproveProject';
import CreateBusinessUnitForm from './BusinessUnit';

const FinanceNavigation = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCreateBusinessUnitSubmit = (businessUnit) => {
    // Implement logic to submit business unit to the server
    console.log('Submitting business unit:', businessUnit);
  };

  return (
    <div>
      {<AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Create Business Unit" />
          <Tab label="Finance Approval" />
        </Tabs>
      </AppBar>
    }
      {value === 0 && <CreateBusinessUnitForm onSubmit={handleCreateBusinessUnitSubmit} />}
      {value === 1 && <FinanceApproval />} 
    </div>
  );
};

export default FinanceNavigation;