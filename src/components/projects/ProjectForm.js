import React, { useState } from 'react';
import { Typography, Grid, Button, LinearProgress } from '@mui/material';
import ProjectInfoSection from './ProjectInfoSection'; // Assume separate components for each section
import OCAProjectDetailsSection from './OCAProjectDetailsSection'; // Separate component for OCA Project Details section
import KeyClientContactSection from './KeyClientContactSection'; // Separate component for Key Client Contact section
import LOEInfoSection from './LOEInfoSection'; // Separate component for LOE Info section

const ProjectForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    salesOpportunity: '',
    projectSummary: '',
    signingEntity: '',
    capitalRaise: '',
    clientName: '',
    projectStartDate: '',
    projectEndDate: '',
    primarySupport: '',
    secondarySupport: '',
    city: '',
    budgetLOE: '',
    partner: '',
    associatePartner: '',
    principal: '',
    seniorPL: '',
    projectLeader: '',
    sAssociate: '',
    sAnalyst: ''
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  // Function to handle next button click
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  // Function to handle previous button click
  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  // Calculate progress percentage based on current step
  const progress = (currentStep - 1) * 25;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <LinearProgress variant="determinate" value={progress} />
        <Typography variant="h5">Step {currentStep}</Typography>
        {currentStep === 1 && (
          <ProjectInfoSection formData={formData} setFormData={setFormData} />
        )}
        {currentStep === 2 && (
          <OCAProjectDetailsSection formData={formData} setFormData={setFormData} />
        )}
        {currentStep === 3 && (
          <KeyClientContactSection formData={formData} setFormData={setFormData} />
        )}
        {currentStep === 4 && (
          <LOEInfoSection formData={formData} setFormData={setFormData} />
        )}
        <Grid container spacing={2} justifyContent="center">
          {currentStep > 1 && (
            <Button variant="contained" onClick={handlePrev}>
              Previous
            </Button>
          )}
          {currentStep < 4 ? (
            <Button variant="contained" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          )}
        </Grid>
      </div>
    </form>
  );
};

export default ProjectForm;
