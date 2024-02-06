import React, { useState } from 'react';
import MyCheckbox from '../utils/MyCheckbox';
import '../../styles/user.css';
import {
  TextField,
  Button,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';

const CreateUser = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = () => {
    // Implement user registration, update, or delete logic here
    console.log('User data submitted:', userData);
  };

  return (
    <div className='div-create-user'>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">Create User</Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="First Name"
          fullWidth
          name="firstName"
          value={userData.firstName}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Last Name"
          fullWidth
          name="lastName"
          value={userData.lastName}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Email"
          fullWidth
          name="email"
          value={userData.email}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>Role</InputLabel>
          <Select
            name="role"
            value={userData.role}
            onChange={handleInputChange}
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="user">User</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
        <MyCheckbox
        label="Active"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
    </div>
  );
};

export default CreateUser;