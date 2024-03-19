import React, {useContext, useState} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DataContext from '../../state/DataContext';
import { Table, TableBody, TableCell, TableContainer, Typography, 
    TableHead, TableRow, Paper, Button, IconButton, makeStyles, Dialog, DialogTitle, DialogContent, DialogActions, Grid } from '@material-ui/core';
import SigningEntity from './SigningEntity'
import  CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 300,
      maxWidth: 600,
      margin: 'auto', 
      marginTop: '4%',
    },
    headerCell: {
      backgroundColor: '#276D8D',
      fontWeight: 'bold', 
      color: "#D5D8DC"
    },
    buttonGroup: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const EntityList = () => {
    const classes = useStyles();
    // const [entities, setEntities] = useState([])
    const { data3 } = useContext(DataContext);
  
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
      marginTop: '1rem' }} >Add Entity</Button>
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
        <SigningEntity/>
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
              <TableCell className={classes.headerCell}>Entity</TableCell>
              <TableCell className={classes.headerCell}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data3.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.entity}</TableCell>
                <TableCell>
                  <div className={classes.buttonGroup}>
                  <Button 
                   variant="contained" 
                   color="primary"
                   startIcon={<EditIcon/>}>
                    Edit
                  </Button>
                  <Button 
                   variant="contained" 
                   color="primary"
                   startIcon={<DeleteIcon/>}
                   className={classes.deleteButton}
                   >
                    Delete
                  </Button>
                  <Button 
                   variant="contained" 
                   color="primary">
                    View
                  </Button>
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

export default EntityList; 