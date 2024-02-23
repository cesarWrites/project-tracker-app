// ForgotPassword.js
import React, { useState } from 'react';
import { Button, TextField, Typography, Container, makeStyles } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    maxWidth: '400px',
    marginTop: theme.spacing(2),
  },
  formField: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    backgroundColor: '#5EAFD3',
    color: '#fff'
  },
}));

const ForgotPassword = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/reset-password', formData);
        console.log(response.data);
      } catch (error) {
        console.error('Password reset error:', error.message);
      }
    console.log('Forgot Password submitted:', formData);
  };

  return (
    <Container className={classes.formContainer} component="main" maxWidth="xs">
      <Typography variant="h5">Forgot Password</Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          className={classes.formField}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Button type="submit" 
        fullWidth 
        variant="contained" 
        color="primary"
        className={classes.submitButton}>
          Reset Password
        </Button>
      </form>
    </Container>
  );
};

export default ForgotPassword;
