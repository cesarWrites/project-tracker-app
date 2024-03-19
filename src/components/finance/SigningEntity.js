import React, { useContext, useState } from 'react';
import { TextField, Button, Checkbox, ListItem, ListItemText, List, ListItemSecondaryAction, FormControlLabel, makeStyles } from '@material-ui/core';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DataContext from '../../state/DataContext';

const useStyles = makeStyles((theme) => ({
  form:{
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 400,
    margin: 'auto',
    marginTop: '5%'
  },

  listContainer: {
    width: '50%' // Adjust the width as needed
  },
  inputField: {
    marginBottom: theme.spacing(2),
  },
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

const SigningEntity = () => {
  const classes = useStyles();
  const [entity, setEntity] = useState('');
  // const [entities, setEntities] = useState([])
  const { data3 } = useContext(DataContext);


  const handleDelete = () => {
    
  }

  const handleEdit = () => {

  }

  const showToastMessage = () => {
    toast.success("Success Notification!", {
    });
  };
  const handleChange = (e) => {
    setEntity(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://34.125.226.2:3123/projects_service/finance/signing_entity', {entity:entity});
        showToastMessage('Entity created');
      } catch (error) {
        toast.error('error');
      }
  };

  return (
    <div>
        <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        label="Signing Entity"
        variant="outlined"
        className={classes.inputField}
        value={entity}
        onChange={handleChange}
        required
      />
      <Button variant="contained" 
      color="primary" 
      style={{ backgroundColor: '#5EAFD3', marginTop: '1rem' }} 
      type="submit">
        Submit
      </Button>
    </form>
    </div>
  );
};

export default SigningEntity;
