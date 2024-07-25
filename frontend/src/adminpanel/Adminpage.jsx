
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import WoWpage from './WoWpage';
import { Link } from 'react-router-dom';
import DashBoard from './DashBoard';

export default function Adminpage() {
    const [visible, setVisible] = useState(false);

    const customIcons = (
        <React.Fragment>
            <button className="p-sidebar-icon p-link mr-2">
                <span className="pi pi-search" />
            </button>
        </React.Fragment>
    );

    const customHeader = (
        <div className="d-flex justify-content-between">
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
            <span className="font-bold ms-2 mt-1">Amy Elsner</span>
        </div>
    );
    
    return (
      <>
        <div className="card flex justify-content-center">
            <Sidebar header={customHeader} visible={visible} position="right" onHide={() => setVisible(false)} icons={customIcons}>
            <Link to={'/admin/dashboard'}>dasbord</Link><br></br>
                <Link to={'/admin/productlist'}>Product_List</Link><br></br>
                <Link to={'/dashboard'}>Customer</Link><br></br>
                <Link to={'/admin/vgm'}>Product_Add</Link><br></br>
                <Link to={'/admin/courtnkm'}>carousel</Link><br></br>
            </Sidebar>
        </div>

        <div className="container">
        <div className='d-flex justify-content-between '>
        <h2 >ADMIN</h2>
            <Button className='' icon="pi pi-plus "   onClick={() => setVisible(true)} />
        </div>
        </div>

        <DashBoard />

      </>
    )
}
        