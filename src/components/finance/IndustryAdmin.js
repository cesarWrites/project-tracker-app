import React, { useContext, useEffect, useState } from 'react';
import { TextField, Button, makeStyles } from '@material-ui/core';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DataContext from '../../state/DataContext';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 400,
    margin: 'auto',
    marginTop: '5%'
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
  deleteButton: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  },
}));

const CreateIndustry = () => {
  const classes = useStyles();
  const [industry, setIndustry] = useState('');
  const { data1 } = useContext(DataContext);
  // const [industryVal, setIndustryVal] = useState([]);

  // useEffect(() => {
  //   axios.get('http://34.125.226.2:3123/projects_service/finance/?filter=INDUSTRY')
  //     .then(response => {
  //       const industryData = response.data.data.data;
  //         setIndustryVal(industryData);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);


  const showToastMessage = () => {
    toast.success("Success Notification!", {
    });
  };

  const handleChange = (e) => {
    setIndustry(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://34.125.226.2:3123/projects_service/finance/industry', {industry:industry});
        showToastMessage();
        console.log(response.status);
      } catch (error) {
        toast.error('error');
  }
}

const handleDelete = () => {
    
}

const handleEdit = () => {

}
      

  return (
    <div>
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        label="Industry"
        variant="outlined"
        className={classes.inputField}
        value={industry}
        onChange={handleChange}
        required
      />
      <Button variant="contained" 
      color="primary" 
      style={{ backgroundColor: '#5EAFD3', marginTop: '1rem' }} 
      type="submit">
        Submit
      </Button>
      <ToastContainer/>
    </form>
    </div>
  );
};

export default CreateIndustry;
