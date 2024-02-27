import React, { useState, useEffect } from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Grid, Typography, Button } from '@mui/material';
import '../../styles/survey.css';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    form: {
        marginBottom: '5%',
        marginLeft: '5%',
        alignContent: 'center',
      },
      
  }));

const LOEInfoSection =() => {
    const classes = useStyles();
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
    return(
        <div className='loe-info'>
            <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
            <Grid container spacing={2} margin={'auto'}>
        <Grid item xs={4}>
        <InputLabel htmlFor="email">Budget LOE (Approved by AP for 300K or Partner for 300K)</InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="email-input"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} margin={'auto'}>
        <Grid item xs={4}>
        <InputLabel htmlFor="email">Partner</InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="email-input"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} margin={'auto'}>
        <Grid item xs={4}>
        <InputLabel htmlFor="email">Associate Partner</InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="email-input"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} margin={'auto'}>
        <Grid item xs={4}>
        <InputLabel htmlFor="email">Associate Partner</InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="email-input"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} margin={'auto'}>
        <Grid item xs={4}>
        <InputLabel htmlFor="email">Principal</InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="email-input"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} margin={'auto'}>
        <Grid item xs={4}>
        <InputLabel htmlFor="email">Senior PL/Senior TL</InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="email-input"
            variant="outlined"
            fullWidth
            value={''}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} margin={'auto'}>
        <Grid item xs={4}>
        <InputLabel htmlFor="email">Project Leader/Transaction Leader</InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="email-input"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} margin={'auto'}>
        <Grid item xs={4}>
        <InputLabel htmlFor="email">(S) Associate</InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="email-input"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} margin={'auto'}>
        <Grid item xs={4}>
        <InputLabel htmlFor="email">(S) Analyst</InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="email-input"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
        {/* <Grid item xs={12} marginLeft={50}>
        <Button
          variant="contained"
          color="primary"
          className={classes.submitButton}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Grid> */}
            </form>
        </div>
    )
}

export default LOEInfoSection;