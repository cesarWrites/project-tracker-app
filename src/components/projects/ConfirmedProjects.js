 // ProjectTable.js
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import '../../App.css';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    border: '1px solid #ddd', 
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    border: '1px solid #ddd', 
    padding: theme.spacing(1),
  },
  tableBodyCell: {
    border: '1px solid #ddd', 
    padding: theme.spacing(1),
  },
}));

const ConfirmedProjects = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([]);
 
  useEffect(() => {
    // Fetch project data from the server when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='prj-tentative'>
      <h4>Tentative Projects</h4>
      <div className='table-content'>
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>ProjectID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Client</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell>{project.code}</TableCell>
              <TableCell>{project.name}</TableCell>
              <TableCell>{project.client}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
  );
};

export default ConfirmedProjects;
