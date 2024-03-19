import React from 'react';
import QuickAction from './QuickAction';
import SideNavbar from './Sidenavbar';
import ProjectList from '../projects/projectList';
import ConfirmedProjects from '../projects/ConfirmedProjects';
import '../../App.css';
import SettingsNav from './SettingsNav';
import NavigationBar from './NavigationBar';
import SideNav from './SideNav';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FinanceNavigation from '../finance/FinanceNav';

const useStyles = makeStyles((theme) => ({
  form: {
      marginBottom: '5%',
      marginLeft: '5%',
      alignContent: 'center',
      marginRight: '5%',
    },
    grid: {
      margin: '2%',
    }
    
}));

const LandingPage = () => {
  const classes = useStyles();
    return (
        <div className='dashboard-container'>
          <NavigationBar/>
          <SideNavbar/>
        <div className='content'>
          </div>
      </div>
          );
        };

export default LandingPage;