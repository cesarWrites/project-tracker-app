import React, { useState, useEffect } from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Grid, Typography, Button } from '@mui/material';
import '../../styles/survey.css';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    form: {
        marginBottom: '5%',
        marginLeft: '5%',
        marginRight: '10%',
      },
  }));


  const KeyClientContactSection = () => {
    const classes = useStyles();
    const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };
  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };
    return(
        <div className='client-info'>
        <Typography fontWeight={'bold'}>Key client contact</Typography>
        <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
        <Grid container spacing={2} margin={'auto'}>
        <Grid item xs={4}>
        <InputLabel htmlFor="dropdown">Full name</InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="input-field"
            variant="outlined"
            fullWidth
            value={inputValue1}
            onChange={handleInputChange1}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} margin={'auto'}>
        <Grid item xs={4}>
        <InputLabel htmlFor="email">Email address</InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="email-input"
            variant="outlined"
            fullWidth
            value={inputValue2}
            onChange={handleInputChange2}
          />
        </Grid>
      </Grid>
      </form>
      </div>
    )
  }

export default KeyClientContactSection;
