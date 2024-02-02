 // ProjectTable.js
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import axios from 'axios';

const ConfirmedProjects = () => {
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
      <h4>Tentative Projects</h4>
      <div className='table-content'>
    <TableContainer component={Paper}>
      <Table>
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
