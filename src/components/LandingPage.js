import React from 'react';
import QuickAction from './QuickAction';
import SideNavbar from './Sidenavbar';
import ProjectList from './projectList';
import ConfirmedProjects from './ConfirmedProjects';
import '../App.css';

const LandingPage = () => {
    return (
        <div className='dashboard-container'>
        <div className="sidebar">
        <SideNavbar />
        </div>
        <div className='content'>
            <div className='quick-links'>
              <QuickAction />
            </div>
            <div className='table-container'>
              <ConfirmedProjects />
            </div>
          </div>
          <div className='table-container'>
            <ProjectList />
          </div>
      </div>
          );
        };

export default LandingPage;