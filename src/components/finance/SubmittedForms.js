import React, {useState} from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, 
  Paper, Button, Link } from '@mui/material';
import ProjectForm from '../projects/ProjectForm';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import ConfirmationComponent from './FormReview';

// Sample data (replace with your actual data)
const submittedForms = [
  { id: 1, user: 'Beth Muiruri', project: 'Project A' },
  { id: 2, user: 'Brenda Mururu', project: 'Project B' },
  // Add more form data here
];

const useStyles = makeStyles((theme) => ({
  table: {
    maxWidth: '300',
    margin: 'auto', 
    marginTop: '4%',
    marginLeft: '25%',
    width: 'fit-content'
  },
  headerCell: {
    fontWeight: 'bold', 
  },
}));


const SubmittedForms = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleProjectReview = () => {
        // Redirect to the forgot password page or show a modal
        // You can add the specific route or component for the forgot password feature
        navigate('/review');
      };

      const handleReview = () => {
        setShowConfirmation(true);
      }
    
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.headerCell}>User</TableCell>
            <TableCell className={classes.headerCell}>Project</TableCell>
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
              <TableCell> <Button onClick={handleReview} variant="contained" color="primary">
                </Button >
                {showConfirmation && (
        <ConfirmationComponent/>
                )}
                    </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SubmittedForms;
