import React from 'react';
import '../App.css';
import { Button, ButtonGroup, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const QuickAction = () => {
    const navigate = useNavigate();
    const handleProjectApproval = () => {
        navigate('/approval');
      };
    return(
        <div className='quick-action'>
            <h1>QUICK ACTIONS</h1>
            <div className='quick-nav'>
                
            <ButtonGroup variant="text" aria-label="navigation" 
            style={{ marginLeft: '5%',
            width: 'fit-content'}} >
            <Button style={{  borderRadius: '10px', 
            padding: '20px', 
            border: '2px solid rgb(253, 235, 208)', 
            width: 'fit-content'}} > <Link onClick={handleProjectApproval}>Approve Project
    </Link></Button>
            <Button style={{ borderRadius: '10px', 
            padding: '20px', 
            border: '2px solid rgb(253, 235, 208)', 
            width: 'fit-content'}}href="/component2">Initialize Project</Button>
            <Button style={{borderRadius: '10px', 
            padding: '20px', 
            border: '2px solid rgb(253, 235, 208)', 
            width: 'fit-content'}} href="/component3">Project Code Survey</Button>
            </ButtonGroup>
            </div>

        </div>
    )
}

export default QuickAction;