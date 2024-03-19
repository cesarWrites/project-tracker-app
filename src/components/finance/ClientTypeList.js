import React, { useContext, useEffect, useState } from 'react';
import {  makeStyles } from '@material-ui/core';
import axios from 'axios';
import BusinessUnitList from './BusinessUnitList';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DataContext from '../../state/DataContext';
import { Table, TableBody, TableCell, TableContainer, Typography, 
  TableHead, TableRow, Paper, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Grid } from '@material-ui/core';
import CreateClientType from './ClientType';
import  CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => ({
    Button: {
      padding: '5%'
    },
    table: {
      minWidth: 300,
      maxWidth: 600,
      margin: 'auto', 
      marginTop: '4%',
    },
    headerCell: {
      fontWeight: 'bold', 
    },
    buttonGroup: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  const ClientTypeList = () => {
    const classes = useStyles();
    const { data2 } = useContext(DataContext);

    const [editedItems, setEditedItems] = useState([]);
  
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
    marginTop: '4%'}}></div>
           <Button variant="contained"
      className={classes.button}
      color="primary" 
      onClick={handleClickOpen}
      style={{ backgroundColor: '#5EAFD3', marginLeft: '70%',
      marginTop: '1rem' }} >Add Client Type</Button>
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
        <CreateClientType/>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
        <Typography variant='h4' style={{ marginLeft: '20%', color: '#276D8D'}}> Hi, 
        </Typography>
            <TableContainer component={Paper} className={classes.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.headerCell}>Client Name</TableCell>
              <TableCell className={classes.headerCell}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data2.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.type}</TableCell>
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

  export default ClientTypeList;