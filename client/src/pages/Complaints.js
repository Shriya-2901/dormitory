import React from 'react';
import Card1 from '../components/Card';
import NavBar from '../components/NavBar';
import NavBar1 from '../components/NavBar1';
import SideNav from '../components/SideNav';


function Complaints() {
    return (
        <div className="App">
            <NavBar />
            <NavBar1 />
            <div className='container me-0 ms-0 mt-4'>
                {/* <SideNav /> */}
                <Card1 />
                <h1 className=''>Hola</h1>
            </div>


        </div>
    );
}

export default Complaints;



