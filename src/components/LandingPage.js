import React from 'react';
import QuickAction from './QuickAction';
import SideNavbar from './Sidenavbar';
import ProjectList from './projectList';
import ConfirmedProjects from './ConfirmedProjects';
import '../App.css';

const LandingPage = () => {
    return (
        <div className='main-dashboard' style={{ height: '100vh'}}>
        <SideNavbar />
        <div style={{ marginLeft: '15%', flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
          {/* Tables Container */}
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, marginRight: '20px', zIndex: 0 }}>
              <QuickAction />
            </div>
            <div style={{ flex: 1, zIndex: 0 }}>
              <ConfirmedProjects />
            </div>
          </div>
  
          {/* Table 3 (At the Bottom) */}
          <div style={{ marginTop: '20px', zIndex: 0 }}>
            <ProjectList />
          </div>
        </div>
      </div>
          );
        };

export default LandingPage;