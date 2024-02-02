// ProjectTable.js
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    border: '1px solid #ddd', // Add border style
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    border: '1px solid #ddd', // Add border style
    padding: theme.spacing(1),
  },
  tableBodyCell: {
    border: '1px solid #ddd', // Add border style
    padding: theme.spacing(1),
  },
}));

const ProjectList = () => {
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
    <div className='confirmed-projects'>
      <h4>Confirmed Projects</h4>
      <div className='table-content'>
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>End Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell>{project.name}</TableCell>
              <TableCell>{project.code}</TableCell>
              <TableCell>{project.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
  );
};

export default ProjectList;
