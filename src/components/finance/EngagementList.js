import React, {useState, useContext} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {  makeStyles } from '@material-ui/core';
import { Table, TableBody, TableCell, TableContainer, Typography, 
  TableHead, TableRow, Paper, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Grid } from '@material-ui/core';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '../../styles/finance.css';
import 'react-toastify/dist/ReactToastify.css';
import DataContext from '../../state/DataContext';
import { Link } from 'react-router-dom';
import  CancelIcon from '@material-ui/icons/Cancel';
import CreateEngagementType from './EngagementType';

const useStyles = makeStyles((theme) => ({
    Button: {
      padding: '5%'
    },
    table: {
      minWidth: 300,
      maxWidth: 600,
      margin: 'auto', 
      marginTop: '10%',
    },
    headerCell: {
      fontWeight: 'bold',
      backgroundColor: '#276D8D',
      color: "#D5D8DC"
    },
  }));

const EngagementList = () => {
    const { data } = useContext(DataContext);
    const classes = useStyles();

    const { data4 } = useContext(DataContext);
  
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return(
<div> 
      <div className='settings-nav' style={{  width: '100%', height: 'fit-content', padding: '1%', 
    backgroundColor: '#FDEBDO', 
    borderBottom: '1px solid #D5D8DC', 
    marginTop: '4%'}}>
      
      <Button variant="contained"
      className={classes.button}
      color="primary" 
      onClick={handleClickOpen}
      style={{ backgroundColor: '#5EAFD3', marginLeft: '70%',
      marginTop: '1rem' }} >Add Engagement</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title"
      fullWidth>
        <DialogTitle id="form-dialog-title">
          <Grid container alignItems="center">
            <Grid item xs={11}>
            Enter details
            </Grid>
            <Grid item xs={1} style={{ textAlign: 'right' }}>
            <Button onClick={handleClose} color="primary">
              <CancelIcon/>
          </Button>
            </Grid>
          </Grid>
          
          </DialogTitle>
        <DialogContent>
        <CreateEngagementType/>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
        <Typography variant='h4' style={{ marginLeft: '20%', color: '#276D8D'}}> Hi, 
        </Typography>
    </div>
<TableContainer component={Paper} className={classes.table}>
<Table>
  <TableHead>
    <TableRow>
      <TableCell className={classes.headerCell}>Engagement Type</TableCell>
      <TableCell className={classes.headerCell}>Actions</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {data.map(engagement => (
      <TableRow key={engagement.id}>
        <TableCell>{engagement.type}</TableCell>
        <TableCell>
          <div className={classes.buttonGroup}>
        <EditIcon/>
       <DeleteIcon/>
          </div>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
</div>
    )
}

export default EngagementList; 