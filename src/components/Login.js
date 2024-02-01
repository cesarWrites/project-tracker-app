// Login.js
import React, { useState } from 'react';
import { Button, TextField, Typography, Container, makeStyles, Link } from '@material-ui/core';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    backgroundColor: '#4caf50',
    color: '#fff'
  },
  forgotPasswordLink: {
    marginTop: theme.spacing(1),
    display: 'block',
  },
}));

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/login', formData);
        console.log(response.data);

        // Redirect to project list
       navigate('/dashboard');
      } catch (error) {
        console.error('Login error:', error.message);
      }
  };

  const handleForgotPassword = () => {
    // Redirect to the forgot password page or show a modal
    // You can add the specific route or component for the forgot password feature
    navigate('/forgot-password');
  };

  return (
    <Container className={classes.formContainer} component="main" maxWidth="xs">
      <Typography variant="h5">Login</Typography>
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
        <TextField
          className={classes.formField}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button type="submit" 
        fullWidth 
        variant="contained" 
        color="primary"
        className={classes.submitButton}>
          Login
        </Button>
        <Link className={classes.forgotPasswordLink} onClick={handleForgotPassword}>
          Forgot Password?
        </Link>
      </form>
    </Container>
  );
};

export default Login;
