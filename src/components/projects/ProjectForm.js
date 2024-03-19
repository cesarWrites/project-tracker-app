import React, { useState } from 'react';
import { Typography, Grid, Button, LinearProgress } from '@mui/material';
import ProjectInfoSection from './ProjectInfoSection'; 
import OCAProjectDetailsSection from './OCAProjectDetailsSection'; // Separate component for OCA Project Details section
import KeyClientContactSection from './KeyClientContactSection'; // Separate component for Key Client Contact section
import LOEInfoSection from './LOEInfoSection'; // Separate component for LOE Info section
import { useHead } from '../../state/context';
import axios from 'axios';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: '#5EAFD3',
  },
}));

const ProjectForm = () => {
  const classes = useStyles();

  const { head, addHead } = useHead();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    ProjectInfoSection: { selectedClientType:'', selectedEngagement: ''}
  });

  const handleChange = (event) => {
    // const { name, value } = event.target;
    // setFormData({ ...formData, [name]: value });
  };

  const handleSection1Change = (data) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      ProjectInfoSection: { ...prevFormData.ProjectInfoSection, ...data },
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
  e.preventDefault();
  let project = {
    engagement:head.engagement,
    country2:head.country2,
    country1:head.country1,
    client1:head.client1,
  }

  try {
    const response = await axios.post('http://localhost:5000/signup', formData);
    console.log(response.data);
  } catch (error) {
    console.error('Signup error:', error.message);
  }
  console.log(project)
  };


  // Function to handle saving form for later
  const handleSaveForLater = () => {

  }
  // Function to handle next button click
  const handleNext = (data) => {
    setFormData({...Button.formData, ...data});
    setCurrentStep(currentStep + 1);
  };

  // Function to handle previous button click
  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  // Calculate progress percentage based on current step
  const progress = (currentStep - 1) * 25;



  return (
      <div>
        <LinearProgress variant="determinate" value={progress} />
        <Typography variant="h5">Step {currentStep}</Typography>
        {currentStep === 1 && (
          <ProjectInfoSection data={formData.ProjectInfoSection} onChange={handleSection1Change} />
        )}
        {currentStep === 2 && (
          <OCAProjectDetailsSection name="section2" value={formData.OCAProjectDetailsSection} onChange={handleChange} />
        )}
        {currentStep === 3 && (
          <KeyClientContactSection formData={formData} setFormData={setFormData} />
        )}
        {currentStep === 4 && (
          <LOEInfoSection formData={formData} setFormData={setFormData} />
        )}
        <Grid container spacing={2} justifyContent="center">
          {currentStep > 1 && (
            <Button variant="contained" 
            style={{ backgroundColor: '#5EAFD3', marginLeft: '10%', marginRight:'2%' }}
            onClick={handlePrev}>
              Previous
            </Button>
          )}
          {currentStep < 4 ? (
            <Button 
            className={classes.button}
            style={{ backgroundColor: '#5EAFD3', marginRight:'2%' }}
            variant="contained" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button type="submit" variant="contained" 
            style={{ backgroundColor: '#5EAFD3', marginRight:'2%' }}
            color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          )}
        </Grid>
      </div>
  );
};

export default ProjectForm;



