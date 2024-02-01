import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import ProjectList from './components/projectList';
import Login from './components/Login';
import SignUp from './components/Register';
import ForgotPassword from './components/ForgotPassword';


function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/projects" element={<ProjectList/>} />
    </Routes>
    </Router>
  );
}

export default App;
