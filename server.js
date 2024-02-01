const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Simulated user data (replace with a database in a real application)
const users = [];

// Simulated data for projects
const projects = [
    { id: 1, code: 'PRJ001', name: 'Project One' },
    { id: 2, code: 'PRJ002', name: 'Project Two' },
    // Add more projects as needed
  ];


// Endpoint to simulate user signup
app.post('/signup', (req, res) => {
  const { email, password } = req.body;
  // Add user to the simulated database
  users.push({ email, password });
  res.status(200).json({ message: 'User signed up successfully!' });
});

// Endpoint to simulate user login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Check if user exists in the simulated database
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    res.status(200).json({ message: 'Login successful!' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Endpoint to simulate password reset
app.post('/reset-password', (req, res) => {
  const { email } = req.body;
  // Check if user exists in the simulated database
  const user = users.find((u) => u.email === email);
  if (user) {
    // Implement your password reset logic here
    res.status(200).json({ message: 'Password reset email sent!' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.get('/projects', (req, res) => {
    res.status(200).json(projects);
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
