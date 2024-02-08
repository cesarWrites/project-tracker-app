import React, { useState } from 'react';
import CreateUser from './CreateUser';
import UserTable from './UserList';

const AdminNavigation = () => {
    return(
        <div className='admin-nav'>
            <CreateUser/>
            <UserTable/>
        </div>
    )
}

export default AdminNavigation;