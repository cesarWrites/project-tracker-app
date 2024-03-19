import React, { useState, useEffect } from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Grid, Typography, Button } from '@mui/material';
import '../../styles/survey.css';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { useHead } from '../../state/context';

const useStyles = makeStyles((theme) => ({
    form: {
        marginBottom: '5%',
        marginLeft: '5%',
        marginRight: '10%',
      },
  }));

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });


const KeyClientContactSection = () => {
    const classes = useStyles();
    // Variables for client details
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');

    const { head, addHead } = useHead();

  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
    addHead('name', event.target.value);
  };
  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
    addHead('email', event.target.value)
  };

    return(
        <div className='client-info' style={{ marginLeft: '15%', marginTop: '2%'}}>
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
            value={head.name && head.name}
            onChange={handleInputChange1}
          />
      </Grid>
        <Grid item xs={4}>
        <InputLabel htmlFor="email">Email address</InputLabel>
        </Grid>
        <Grid xs={8}>
          <TextField
            id="email-input"
            variant="outlined"
            fullWidth
            value={head.email && head.email}
            onChange={handleInputChange2}
          />
        </Grid>
        <Grid item xs={4}>
        <InputLabel htmlFor="email">Email address</InputLabel>
        </Grid>
        <Grid xs={8}>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>
          </Grid>
        </Grid>
      </form>
      </div>
    )
  }

export default KeyClientContactSection;
