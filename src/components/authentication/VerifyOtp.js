import axios from 'axios';
import React, { useState } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Container, makeStyles, Link } from '@material-ui/core';

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


const VerifyOtp = (props) => {
  const classes = useStyles();
  const [otp, setOtp] = useState('');
  // const history = useHistory();
  const location = useLocation()
  console.log('here are the propsprops',location)

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const response = axios.get('https://e104-105-162-11-197.ngrok-free.app/auth_service/accounts/otp/verify', {params:{otp, email:location.state.email}});
    response.then( (res) => {
        // navigate('/dashboard');
        console.log(response.data)
    }).catch((error) => {
      console.log(error.message);
    })
  };

  return (
    <div style={{ marginLeft: '20%'}}>
      <h2>Confirm Your Account</h2>
      <form>
        <label>
          Enter OTP:
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </label>
        <button onClick={handleSubmit} type="submit">Confirm Account</button>
      </form>
    </div>
  );
};

export default VerifyOtp;
