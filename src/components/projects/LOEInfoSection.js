import React, { useState, useEffect } from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Grid, Typography, Button } from '@mui/material';
import '../../styles/survey.css';
import { makeStyles } from '@material-ui/core/styles';
import { useHead } from '../../state/context'

const useStyles = makeStyles((theme) => ({
    form: {
        marginBottom: '5%',
        marginLeft: '5%',
        alignContent: 'center',
      },
      
  }));

const LOEInfoSection =() => {
    const classes = useStyles();

    const [optionInput, setOptionInput] = useState('');
    const [budgetInput, setBudgetInput] = useState('');
    const [partnerLoe, setPartnerLoe] = useState('');
    const [aPartnerLoe, setApartnerLoe] = useState('');
    const [principal, setPrincipal] = useState('');
    const [sPL, setSPL] = useState('');
    const [plLOE, setPlLOE] = useState('');
    const [Associate, setAssociate] = useState('');
    const [Analyst, setAnalyst] = useState('')
    const { head, addHead } = useHead();
    
    const options = [
      { value: 'yes', label: 'yes' },
      { value: 'no', label: 'no' }
    ]

    const handleOptionInputChange = (event) => {
      setOptionInput(event.target.value);
      addHead('option', event.target.value)
    }

    const handleBudgetInput = (event) => {
      setBudgetInput(event.target.value);
      addHead('budget', event.target.value);
    }

    const handlePartnerLoe = (event) => {
      setPartnerLoe(event.target.value);
      addHead('partner', event.target.value);
    }

    const handleAPartnerLoe =(event) => {
      setApartnerLoe(event.target.value);
      addHead('Apartner', event.target.value)
    }
    const handleProjectLeaderLOE =(event) => {
      setPlLOE(event.target.value);
      addHead('PL', event.target.value);
    }

    const handlePrincipalLOE = (event) => {
      setPrincipal(event.target.value);
      addHead('principal', event.target.value);
    }

    const handleSeniorPLLOE = (event) => {
      setSPL(event.target.value);
      addHead('seniorPL', event.target.value);
    }

    const handleAssociateLOE = (event) =>{
      setAssociate(event.target.value);
      addHead('associate', event.target.value);
    }

    const handleAnalystLOE = (event) => {
      setAnalyst(event.target.value);
      addHead('analyst', event.target.value)
    }

    return(
        <div className='loe-info' style={{ marginLeft: '15%', marginTop: '2%', width: 'fit-content'}}>
            <form  className={classes.form}>
              <Typography>LOE Section</Typography>
      <Grid container spacing={2}>
      <Grid item xs={6}>
      <InputLabel htmlFor="dropdown">Have you already provided budget for this project?</InputLabel>
      <Select
        id="dropdown"
        value={head.option && head.option}
        onChange={handleOptionInputChange}
        label="Select an option"
        fullWidth
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      </Grid>
        <Grid item xs={6}>
        <InputLabel htmlFor="budget">Budget LOE (Approved by AP for 300K or Partner for 300K)</InputLabel>
          <TextField
            id="email-input"
            variant="outlined"
            fullWidth
            value={head.budget && head.budget}
            onChange={handleBudgetInput}
          />
        </Grid>
        <Grid item xs={6}>
        <InputLabel htmlFor="email">Partner</InputLabel>
          <TextField
            id="email-input"
            variant="outlined"
            fullWidth
            value={head.partner && head.partner}
            onChange={handlePartnerLoe}
          />
        </Grid>
        <Grid item xs={6}>
        <InputLabel htmlFor="email">Associate Partner</InputLabel>
          <TextField
            id="email-input"
            variant="outlined"
            fullWidth
            value={head.Apartner && head.Apartner}
            onChange={handleAPartnerLoe}
          />
        </Grid>
        <Grid item xs={6}>
        <InputLabel htmlFor="email">Principal</InputLabel>
          <TextField
            id="email-input"
            variant="outlined"
            fullWidth
            value={head.principal && head.principal}
            onChange={handlePrincipalLOE}
          />
        </Grid>
        <Grid item xs={6}>
        <InputLabel htmlFor="email">Senior PL/Senior TL</InputLabel>
          <TextField
            id="email-input"
            variant="outlined"
            fullWidth
            value={head.seniorPL && head.seniorPL}
            onChange={handleSeniorPLLOE}
          />
        </Grid>
        <Grid item xs={6}>
        <InputLabel htmlFor="email">Project Leader/Transaction Leader</InputLabel>
          <TextField
            id="email-input"
            variant="outlined"
            fullWidth
            value={head.PL && head.PL}
            onChange={handleProjectLeaderLOE}
          />
        </Grid>
        <Grid item xs={6}>
        <InputLabel htmlFor="email">(S) Associate</InputLabel>
          <TextField
            id="email-input"
            variant="outlined"
            fullWidth
            value={head.associate && head.associate}
            onChange={handleAssociateLOE}
          />
        </Grid>
        <Grid item xs={6}>
        <InputLabel htmlFor="email">(S) Analyst</InputLabel>
          <TextField
            id="email-input"
            variant="outlined"
            fullWidth
            value={head.analyst && head.analyst}
            onChange={handleAnalystLOE}
          />
        </Grid>
      </Grid>
            </form>
        </div>
    )
}

export default LOEInfoSection;