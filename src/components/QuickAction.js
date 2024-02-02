import React from 'react';
import '../App.css';
import { Button, ButtonGroup } from '@mui/material';

const QuickAction = () => {
    return(
        <div className='quick-action'>
            <h1>QUICK ACTIONS</h1>
            <div className='quick-nav'>
                
            <ButtonGroup variant="text" aria-label="navigation">
            <Button style={{  borderRadius: '10px', 
            padding: '20px', 
            border: '2px solid rgb(253, 235, 208)', 
            width: 'fit-content'}} href="/component1">Approve Project</Button>
            <Button style={{ borderRadius: '10px', 
            padding: '20px', 
            border: '2px solid rgb(253, 235, 208)', 
            width: '35%'}}href="/component2">Initialize Project</Button>
            <Button style={{borderRadius: '10px', 
            padding: '20px', 
            border: '2px solid rgb(253, 235, 208)', 
            width: '35%'}} href="/component3">Project Code Survey</Button>
            </ButtonGroup>
            </div>

        </div>
    )
}

export default QuickAction;