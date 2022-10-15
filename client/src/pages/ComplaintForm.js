import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import NavBar1 from '../components/NavBar1';
import SideNav from '../components/SideNav';
import "../styles/Form.css"

function ComplaintForm() {
    const [data, setData] = useState({});

    return (

        <div>
            <NavBar />
            <NavBar1 />

            <div className='container mt-5 row'>

                <div className='col-12 col-lg-3 me-5 ms-2 mb-4' style={{ backgroundColor: "#D9D9D9", borderRadius: "1rem" }}>
                    <SideNav />
                </div>
                <div className='col'>
                    <form className='form'>
                        {/* <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder='Name' onChange={(e) => setData({ ...data, name: e.target.value })} value={data.name} />

                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder='Email' onChange={(e) => setData({ ...data, email: e.target.value })} value={data.email} /> */}
                        <h1 className='title'>Complaints Form</h1>
                        <div className="form-group">
                            <label className='label' htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="title" placeholder='Title' onChange={(e) => setData({ ...data, title: e.target.value })} value={data.title} />
                        </div>
                        <div className="form-group">
                            <label className='label' htmlFor="category">Category</label>
                            <select className="form-control" id="category">
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="form-group">

                            <label className='label' htmlFor="description">Description</label>
                            <textarea className="form-control" id="description" placeholder='Description' onChange={(e) => setData({ ...data, description: e.target.value })} value={data.description} />
                        </div>
                        <div className="form-group">
                            <label className="me-4 label" for="file">Media(Optional): </label>
                            <input type="file" className="form-control-file" id="file" />
                        </div>
                        <button type="submit" className="btn btn-primary submit">Submit</button>
                    </form>
                </div>
            </div>


        </div>
    );
}

export default ComplaintForm;



