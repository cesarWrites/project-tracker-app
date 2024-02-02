import React from 'react';
import QuickAction from './QuickAction';
import SideNavbar from './Sidenavbar';
import ProjectList from './projectList';
import ConfirmedProjects from './ConfirmedProjects';
import '../App.css';

const LandingPage = () => {
    return (
        <div className='container'>
        <div className='main-dashboard'>
            <div className='item-one'>
        <SideNavbar/>
        </div>
        <div className='item-two'>
        <QuickAction/>
        </div>
        <div className='item-three'>
        <ProjectList/>
        </div>
        </div>
        <ConfirmedProjects/>
        </div>
    )
}

export default LandingPage;