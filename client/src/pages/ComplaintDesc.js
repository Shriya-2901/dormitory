import React from 'react';
import { Link } from 'react-router-dom';
import Card1 from '../components/Card';
import NavBar from '../components/NavBar';
import NavBar1 from '../components/NavBar1';
import SideNav from '../components/SideNav';

import IITLogo from "../images/iitm_logo.png"


function ComplaintsDesc(props) {

    return (
        <div className="complain">
            <NavBar />
            <NavBar1 />
            <div className='container mt-5 row'>
                <h1 className='text-center mt-0'>Title</h1>

                <div className='col-12 col-lg-3 me-5 ms-2 mb-4' style={{ backgroundColor: "#D9D9D9", borderRadius: "1rem", height: "60vh" }}>
                    <SideNav />
                </div>
                <div className='mt-4 ms-5 col text-center'>
                    <div className="card justify-content-center" style={{ width: "fit-content" }}>
                        <img className="card-img-top" src={IITLogo} alt="Card image cap" style={{ width: "3rem", margin: "auto" }} />
                        <div className="card-body">
                            <h3 className="card-title">Title</h3>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae saepe at consectetur aspernatur nobis ratione eligendi maiores mollitia consequuntur laborum deserunt placeat aperiam nihil amet veritatis, voluptatibus, vel sequi doloremque?</p>
                            <div>
                                <h5>Mark <span className='ms-3'>ME20B087</span> </h5>
                            </div>
                            <Link href="#" className="btn btn-success me-5">Resolve</Link>
                            {/* <Link href="#" className="btn btn-danger">Resolve</Link> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComplaintsDesc;



