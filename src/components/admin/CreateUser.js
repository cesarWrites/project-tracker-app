import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../state/userSlice'
import MyCheckbox from '../utils/MyCheckbox';
import '../../styles/user.css';
import axios from 'axios';

import {
  TextField,
  makeStyles,
  Button,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    marginTop: '5%'
  },
  inputField: {
    marginBottom: theme.spacing(2),
  },
}));

const CreateUser = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    axios.get('http://34.125.226.2:3122/auth_service/accounts/role/')
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

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [userData, setUserData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    role: '',
    password: '',
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
    dispatch(createUser(userData));
    setErrorMessage('');
    setSuccessMessage('');
};
        // setUserData({ username: '', email: '', password: '' })

  return (
    <div className='div-create-user'>
    <form className={classes.form} onSubmit={handleSubmit}>
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
      {/* <Grid item xs={12}>
        <FormControl fullWidth>
        <MyCheckbox
        label="Active"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
        </FormControl>
      </Grid> */}
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
    </form>
    </div>
  );
};

export default CreateUser;