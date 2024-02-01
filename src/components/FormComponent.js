import React, { useState } from 'react';
import { Button, TextField, Typography, Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    maxWidth: '400px',
    marginTop: theme.spacing(2),
  },
  formField: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    backgroundColor: '#4caf50',
    color: '#fff'
  },
}));

const FormComponent = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <Container className={classes.formContainer} component="main" maxWidth="xs">
      <Typography variant="h5">Contact Us</Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          className={classes.formField}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          className={classes.formField}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          className={classes.formField}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="message"
          label="Message"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
        />
        <Button 
        type="submit" 
        fullWidth variant="contained" 
        color="primary"
        className={classes.submitButton}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default FormComponent;
