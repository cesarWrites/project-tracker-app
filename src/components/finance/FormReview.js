import React from 'react';
import { Typography, Button } from '@material-ui/core';

const ConfirmationComponent = ({ formData, onSubmitConfirmation, onCancel }) => {
  return (
    <div>
      <Typography variant="h6">Please confirm the submitted data:</Typography>
      <Typography variant="body1">Project Name: {formData.projectName}</Typography>
      <Typography variant="body1">Client Name: {formData.clientName}</Typography>
      <Typography variant="body1">Total Budget: {formData.totalBudget}</Typography>
      <Typography variant="body1">Industry: {formData.industry}</Typography>
      <Typography variant="body1">Start Date: {formData.startDate.toDateString()}</Typography>
      <Typography variant="body1">End Date: {formData.endDate.toDateString()}</Typography>
      <Typography variant="body1">Contract Document: {formData.contractDocument ? formData.contractDocument.name : 'None'}</Typography>
      <Button variant="contained" color="primary" onClick={onSubmitConfirmation}>Approval</Button>
      <Button variant="contained" color="secondary" onClick={onCancel}>Cancel</Button>
    </div>
  );
};

export default ConfirmationComponent;