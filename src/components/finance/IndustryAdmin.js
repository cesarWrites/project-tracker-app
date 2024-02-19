import React, { useState } from 'react';
import { TextField, Button, Checkbox, ListItem, ListItemText, List, ListItemSecondaryAction, FormControlLabel } from '@material-ui/core';

const IndustryAdmin = () => {
  const [industryName, setIndustryName] = useState('');
  const [industries, setIndustries] = useState([]);
  const [activeIndustries, setActiveIndustries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!industryName.trim()) return;
    setIndustries([...industries, industryName]);
    setIndustryName('');
  };

  const handleToggle = (index) => {
    const updatedActiveIndustries = [...activeIndustries];
    updatedActiveIndustries[index] = !updatedActiveIndustries[index];
    setActiveIndustries(updatedActiveIndustries);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Industry Name"
          value={industryName}
          onChange={(e) => setIndustryName(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: '#5EAFD3', marginTop: '1rem' }}
          type="submit"
        >
          Add Industry
        </Button>
      </form>
      <List>
        {industries.map((industry, index) => (
          <ListItem key={index}>
            <ListItemText primary={industry} />
            <ListItemSecondaryAction>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={activeIndustries[index]}
                    onChange={() => handleToggle(index)}
                    color="primary"
                  />
                }
                label="Active"
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default IndustryAdmin;