import React, { useState, useEffect } from 'react';
import MyCheckbox from '../utils/MyCheckbox';
import '../../styles/user.css';
import UserTable from './UserList';
import axios from 'axios';

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

  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    // Fetch data from the API endpoint
    axios.get('http://localhost:3122/accounts/role/')
      .then(response => {
          // The role key is nested within the response object
          const rolesData = response.data.data.map(role => role.role);
          console.log(rolesData);// Extract all values (roles) from the object
          setOptions(rolesData);
  
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  // const handleChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [userData, setUserData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    role: '',
  });

  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleInputChange =(e) => { 
    const { name, value } = e.target;
    setUserData({...userData, [name]: value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.post('http://localhost:3122/accounts/user', userData);
      console.log(response.data);
    } catch (error) {
      console.error('Signup error:', error.message);
    }
  console.log('Signup submitted:', userData);
};
        // setUserData({ username: '', email: '', password: '' })

  return (
    <div className='div-create-user'>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">Create User</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Email"
          fullWidth
          name="email"
          type="email"
          value={userData.email}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Phone"
          fullWidth
          name="phone"
          value={userData.phone}
          onChange={handleInputChange}
        />
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
        <FormControl fullWidth>
          <InputLabel id="dropdown-label">Role</InputLabel>
          <Select
          labelId='dropdown-label'
            name="role"
            value={userData.role}
            onChange={handleInputChange}
          >
              {options.map((option, index) => (
            <MenuItem key={index} value={option}>{option}</MenuItem>
          ))}
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
          style={{ backgroundColor: '#5EAFD3', marginTop: '1rem' }} 
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