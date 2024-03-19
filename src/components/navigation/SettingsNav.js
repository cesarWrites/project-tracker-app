import React, { useState } from 'react'; 
import logo from '../../assets/oca_logo.svg';
import { Typography } from '@material-ui/core';
import FinanceNavigation from '../finance/FinanceNav';
import AdminNavigation from '../admin/AdminNav';
import { makeStyles } from '@material-ui/core';
import '../../styles/navigation.css';

const useStyles = makeStyles((theme) => ({
    button: {
      position: 'relative',
      overflow: 'hidden',
      transition: 'background-color 0.3s ease', 
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark, 
      },
    },
    content: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: 0,
      backgroundColor: theme.palette.primary.main,
      opacity: 0,
      transition: 'opacity 0.5s ease', 
    },
    showContent: {
      opacity: 1,
      height: '100px', // Adjust the height as needed
    },
  }));

const SettingsNav = () => {
    const userName = 'Shelton';

    const classes = useStyles();
  
return(
    <div className='settings'>
    <div className='settings-nav' style={{  width: '100%', height: 'fit-content', padding: '1%', 
    backgroundColor: '#FDEBDO', 
    borderBottom: '1px solid #D5D8DC', 
    marginTop: '4%'}}>
        <Typography variant='h4' style={{ marginLeft: '20%', color: '#276D8D'}}> Hi, 
            {userName}
        </Typography>
    </div>
    <div className='settings-det' style={{ marginTop: '8%', display:'flex', 
    flexDirection: 'row', marginLeft: '20%', color: '#276D8D'}}>
        <FinanceNavigation/>
        <AdminNavigation/>
        </div>
    </div>
)
}

export default SettingsNav; 