import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import ProjectList from './components/projects/projectList';
import Login from './components/authentication/Login';
import SignUp from './components/authentication/Register';
import ForgotPassword from './components/authentication/ForgotPassword';
import SideNavbar from './components/navigation/Sidenavbar';
import LandingPage from './components/navigation/LandingPage';
import ProjectForm from './components/projects/ProjectForm';
import AdminNavigation from './components/admin/AdminNav';
import FinanceNavigation from './components/finance/FinanceNav';
import FormReview from './components/finance/FormReview';
import FinanceApproval from './components/finance/ApproveProject';
import CommentForm from './components/finance/CommentForm';
function App() {
  return (
    <div>
    <Router>
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/projects" element={<ProjectList/>} />
        <Route path="/dashboard" element={<LandingPage/>}/>
        <Route path="/survey" element={<ProjectForm/>}/>
        <Route path="/admin" element={<AdminNavigation/>}/>
        <Route path="/finance" element={<FinanceNavigation/>}/>
        <Route path="/review" element={<FormReview/>}/>
        <Route path="/approval" element={<FinanceApproval/>}/>
        <Route path="/comment" element={<CommentForm/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
