// MainMenu.js

import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Home, Assignment, CheckCircle } from '@material-ui/icons'; // Example icons
import WorkIcon from '@material-ui/icons/Work';
import { Link } from 'react-router-dom';

const services = [
  { name: 'Home', icon: <Home />, route: '/' },
  { name: 'Survey', icon: <Assignment />, route: '/survey' },
  { name: 'Approval', icon: <CheckCircle />, route: '/approval' },
  // Add more services as needed
];

const AllServices = () => {
  return (
    <div style={{ marginLeft: '20%', marginTop: '5%'}}>
        <Typography variant='h4'>
            All Services
        </Typography>
    <List style={{ display: 'flex', flexDirection: 'row', margin: '2%'}}>
      <ListItem Button component={Link} to='/project-details'
      style={{ border: '2px solid #D5D8DC', width: '25%',
       padding: '5%', display: 'flex', flexDirection: 'column', margin: '2%', borderRadius: '4%'}}
      >
          <ListItemIcon >
            <Assignment style={{ color: '#F39B13', fontSize: '50'}}/>
         </ListItemIcon>
          <ListItemText primary="Project Code Survey" />
        </ListItem>
        <ListItem Button component={Link} to='/approval'
      style={{ border: '2px solid #D5D8DC', width: '25%',
       padding: '5%', display: 'flex', flexDirection: 'column', margin: '2%', borderRadius: '4%'}}
      >
          <ListItemIcon>
            <WorkIcon style={{ color: '#F39B13', fontSize: '50'}}/>
         </ListItemIcon>
          <ListItemText primary="Approval" />
        </ListItem>
    </List>
    </div>
  );
};

export default AllServices;
