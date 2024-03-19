import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import ProjectList from './components/projects/projectList';
import Login from './components/authentication/Login';
import SignUp from './components/authentication/Register';
import ForgotPassword from './components/authentication/ForgotPassword';
import ProjectForm from './components/projects/ProjectForm';
import AdminNavigation from './components/admin/AdminNav';
import FinanceNavigation from './components/finance/FinanceNav';
import FormReview from './components/finance/FormReview';
import FinanceApproval from './components/finance/ApproveProject';
import CommentForm from './components/finance/CommentForm';
import VerifyOTP from './components/authentication/VerifyOtp';
import AllServices from './components/navigation/Services';
import Layout from './components/navigation/Layout';
import BusinessUnitList from './components/finance/BusinessUnitList';
import SettingsNav from './components/navigation/SettingsNav';
import { DataProvider } from './state/DataContext';
import EngagementList from './components/finance/EngagementList';
import IndustryList from './components/finance/IndustryList';
import ClientTypeList from './components/finance/ClientTypeList';
import ProjectNav from './components/projects/ProjectNav';
import EntityList from './components/finance/EntityList';


function App() {
  return (
    <div>
      <DataProvider>
    <Router>
      <div className='App'>
        <Layout/>
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/projects" element={<ProjectList/>} />
        <Route path="/survey" element={<ProjectForm/>}/>
        <Route path="/admin" element={<AdminNavigation/>}/>
        <Route path="/finance" element={<FinanceNavigation/>}/>
        <Route path="/review" element={<FormReview/>}/>
        <Route path="/approval" element={<FinanceApproval/>}/>
        <Route path="/comment" element={<CommentForm/>}/>
        <Route path="/verify-otp" element={<VerifyOTP/>}/>
        <Route path="/services" element={<AllServices/>}/>
        <Route path="/business-unit" element={<BusinessUnitList/>}/>
        <Route path="/settings" element={<SettingsNav/>}/>
        <Route path="/engagement-list" element={<EngagementList/>}/>
        <Route path="/industry" element={<IndustryList/>}/>
        <Route path="/client-list" element={<ClientTypeList/>}/>
        <Route path="/project-details" element={<ProjectNav/>}/>
        <Route path="/entity-list" element={<EntityList/>}/>
    </Routes>
    </div>
    </Router>
    </DataProvider>
    </div>
  );
}

export default App;
