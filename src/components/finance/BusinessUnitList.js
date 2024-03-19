import React, { useContext, useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, Typography, 
  TableHead, TableRow, Paper, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';
import DataContext from '../../state/DataContext';
import { Link } from 'react-router-dom';
import CreateBusinessUnitForm from './BusinessUnit';
import  CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 300,
    maxWidth: 600,
    margin: 'auto', 
    marginTop: '10%',
  },
  headerCell: {
    fontWeight: 'bold', 
    backgroundColor: '#276D8D',
    color: '#D5D8DC'
  },
  buttonGroup: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  Button: {
    padding: '5%',
  },
}));



const BusinessUnitList = () => {
  const classes = useStyles();
  const [editedItems, setEditedItems] = useState([]);
  const { data4 } = useContext(DataContext);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleDelete = () => {
    
  }

  const handleEdit = () => {

  }

  return (
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
      marginTop: '1rem' }} >Add Business Unit</Button>
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
        <CreateBusinessUnitForm/>
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
              <TableCell className={classes.headerCell}>Notation</TableCell>
              <TableCell className={classes.headerCell}>Business Unit</TableCell>
              <TableCell className={classes.headerCell}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data4.map(unit => (
              <TableRow key={unit.id}>
                <TableCell >{unit.notation}</TableCell>
                <TableCell>{unit.entity}</TableCell>
                <TableCell>
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
                <IconButton aria-label="edit" >
                  <EditIcon />
                </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BusinessUnitList;
