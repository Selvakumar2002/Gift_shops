
import React from 'react';
import { Outlet } from 'react-router-dom';
import Adminpage from './Adminpage';

const AdminLayout = () => {
  return (
    <div className=''>
      <div className=''>
        <Adminpage />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
      

export default AdminLayout;
