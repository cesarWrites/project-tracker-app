import React from 'react';
import { Typography, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    Button: {
      padding: '5%',
    },
  }));

const ProjectNav = () => {
    const classes = useStyles();
    return(
        <div style={{  width: '100%', height: 'fit-content', padding: '1%', 
        backgroundColor: '#FDEBDO', 
        borderBottom: '1px solid #D5D8DC', 
        marginTop: '4%', display: 'flex', flexDirection: 'column'}}>
            <div style={{ marginLeft: '20%'}}>
            <Typography variant='h4' style={{ color: '#276D8D'}}> Hi, Shellton</Typography>
            </div>
            <div>
            <Button variant="contained"
      className={classes.button}
      color="primary" 
      style={{ backgroundColor: '#5EAFD3', marginLeft: '70%' }} 
      component={Link} to="/survey">Submit Project Code Survey</Button>
      </div>     
        </div>
    )

}

export default ProjectNav;