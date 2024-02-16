import React, { useState } from 'react';
import { List, ListItem, ListItemText, Checkbox } from '@mui/material';

const BusinessUnitList = () => {
  // Sample business units (replace with your actual data)
  const [businessUnits, setBusinessUnits] = useState([
    { id: 1, name: 'Sales', active: true },
    { id: 2, name: 'Marketing', active: false },
    { id: 3, name: 'Finance', active: true },
    // Add more business units as needed
  ]);
  console.log(businessUnits)

  const handleCheckboxChange = (id) => {
    setBusinessUnits((prevUnits) =>
      prevUnits.map((unit) =>
        unit.id === id ? { ...unit, active: !unit.active } : unit
      )
    );
  };

  return (
    <List>
      {businessUnits.map((unit) => (
        <ListItem key={unit.id}>
          <Checkbox
            checked={unit.active}
            onChange={() => handleCheckboxChange(unit.id)}
          />
          <ListItemText primary={'Arcadia'} />
        </ListItem>
        
      ))}
    </List>
  );
};

export default BusinessUnitList;
