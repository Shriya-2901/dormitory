import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import NavBar1 from '../components/NavBar1';


function ComplaintForm() {
    const [data, setData] = useState({});

    return (
        <div className="complain-form">
            <NavBar />
            <NavBar1 />
            <div className='container'>

                <form>
                    {/* <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder='Name' onChange={(e) => setData({ ...data, name: e.target.value })} value={data.name} />

                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder='Email' onChange={(e) => setData({ ...data, email: e.target.value })} value={data.email} /> */}
                    <h1 className='text-center'>Complain Form</h1>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" placeholder='Title' onChange={(e) => setData({ ...data, title: e.target.value })} value={data.title} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select className="form-control" id="category">
                            <option></option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="form-group">

                        <label htmlFor="description">Description</label>
                        <textarea className="form-control" id="description" placeholder='Description' onChange={(e) => setData({ ...data, description: e.target.value })} value={data.description} />
                    </div>
                    <div className="form-group">
                        <label className="me-4" for="file">Media(Optional): </label>
                        <input type="file" className="form-control-file" id="file" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>

        </div>
    );
}

export default ComplaintForm;



