// Login.js
import React, { useState } from 'react';
import { Button, TextField, Typography, Container, makeStyles, Link } from '@material-ui/core';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavSection from '../navigation/NavComponent';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from 'js-cookie';

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
  forgotPasswordLink: {
    marginTop: theme.spacing(1),
    display: 'block',
  },
}));

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const showToastMessage = () => {
    toast.success("Success Notification!", {
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({...userData, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
      console.log('here is the user', userData)
    // const response = await axios.get('http://34.125.226.2:3122/auth_service/accounts/user', {params:userData});
    const response = axios.get('https://e104-105-162-11-197.ngrok-free.app', {params:userData})
    response.then((res) =>{
      console.log(res)
      console.log('here is the status ', res)
      alert('user found')
      navigate('verify-otp', {state:{name:'one tow',email:userData.email}})
    }).catch((error)=> {
      alert('user not found')
      console.log(error.message);
    })
    showToastMessage('Success!')
  };
  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <div className='div-login'>
    <NavSection/>
    <Container className={classes.formContainer} component="main" maxWidth="xs">
      {/* <Typography variant="h5">Login</Typography> */}
      <form className={classes.form}>
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
          value={userData.email}
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
          value={userData.password}
          onChange={handleChange}
        />
        <Button type="submit" 
        fullWidth 
        variant="contained" 
        color="primary"
        onClick={handleSubmit}
        className={classes.submitButton}>
          Login
        </Button>
        <ToastContainer/>
        <Link className={classes.forgotPasswordLink} onClick={handleForgotPassword}>
          Forgot Password?
        </Link>
      </form>
    </Container>
    </div>
  );
};

export default Login;
