import React from 'react';
import Card1 from '../components/Card';
import NavBar from '../components/NavBar1';
import NavBar1 from '../components/NavBar2';
import SideNav from '../components/SideNav';


function ComplaintsHistory() {
    return (
        <div className="complain">
           
            <div className='container mt-5 row'>
                <h1 className='text-center mt-0'>Hola</h1>

                <div className='col-12 col-lg-3 '>
                    <SideNav />
                </div>
                <div className='col'>
                    <Card1 />
                </div>
            </div>



        </div>
    );
}

export default ComplaintsHistory;



