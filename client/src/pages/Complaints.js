import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card1 from '../components/Card';
import NavBar from '../components/NavBar';
import NavBar1 from '../components/NavBar1';
import SideNav from '../components/SideNav';


function Complaints() {

    const [search, setSearch] = useState("");
    const info = [{ title: "Regarding the .....", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum minima sed officiis ducimus aliquid quo unde quod id veritatis modi quasi facere totam, numquam deleniti inventore odit ma", by: "@md" },
    { title: "In follow up to the .....", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum minima sed officiis ducimus aliquid quo unde quod id veritatis modi quasi facere totam, numquam deleniti inventore odit ma", by: "@fra" },
    { title: "Regard    ing the .....", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum minima sed officiis ducimus aliquid quo unde quod id veritatis modi quasi facere totam, numquam deleniti inventore odit ma", by: "@pat" },
    { title: "In follow up to the .....", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum minima sed officiis ducimus aliquid quo unde quod id veritatis modi quasi facere totam, numquam deleniti inventore odit ma", by: "@cat" },
    { title: "Regarding the .....", desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum minima sed officiis ducimus aliquid quo unde quod id veritatis modi quasi facere totam, numquam deleniti inventore odit ma", by: "@kat" }]
    return (
        <div className="complain">
            <NavBar />
            <NavBar1 />
            <div className='container mt-5 row'>
                <div className='row'>
                    <h1 className='text-end mt-0 text-primary col-8'>Complaints</h1>
                    <input
                        className="col-3 ms-5"
                        type="text"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                        placeholder="Search by the title ..."
                    />
                </div>


                <div className='col-12 col-lg-3 me-5 ms-2 mb-4' style={{ backgroundColor: "#D9D9D9", borderRadius: "1rem" }}>
                    <SideNav />
                </div>
                <div className='col rounded mt-2' style={{ backgroundColor: "#D9D9D9" }} >
                    <table className="table table-bordered ">
                        <thead className=' w-100'>

                            <tr className="table-dark">
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">By</th>
                            </tr>
                        </thead>
                        <tbody>
                            {info.filter((dat) => (
                                (dat.title).includes(search)
                            )).map((val, key) => {
                                return (<tr>
                                    <Link to="/desc"><th scope="row">{key + 1}</th></Link>
                                    <td>{val.title}</td>
                                    <td>{val.desc}</td>
                                    <td>{val.by}</td>
                                </tr>)
                            })}



                        </tbody>
                    </table>
                </div>
            </div>



        </div >
    );
}

export default Complaints;



