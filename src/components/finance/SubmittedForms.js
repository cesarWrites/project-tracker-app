import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link } from '@mui/material';
import ProjectForm from '../projects/ProjectForm';
import { useNavigate } from 'react-router-dom';

// Sample data (replace with your actual data)
const submittedForms = [
  { id: 1, user: 'Beth Muiruri', project: 'Project A' },
  { id: 2, user: 'Brenda Mururu', project: 'Project B' },
  // Add more form data here
];


const SubmittedForms = () => {
    const navigate = useNavigate();

    const handleProjectReview = () => {
        // Redirect to the forgot password page or show a modal
        // You can add the specific route or component for the forgot password feature
        navigate('/review');
      };
    
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell>Project</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {submittedForms.map((form) => (
            <TableRow key={form.id}>
              <TableCell>
                {/* <Link href={`/review/${form.id}`}>{form.user}</Link> */}
                {/* <Link href={`/review/${form.id}`}>{form.user}</Link> */}
                <Link onClick={handleProjectReview}>
                {form.user}
        </Link>
              </TableCell>
              <TableCell>{form.project}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SubmittedForms;
