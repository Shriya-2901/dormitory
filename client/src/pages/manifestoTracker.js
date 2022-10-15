import React from 'react'
import NavBar from '../components/NavBar';
import NavBar1 from '../components/NavBar1';
import Footer from '../components/Footer';
import '../styles/manifesto.css';
import secretary from "../images/secretary_general.png"

const ManifestoTracker = () => {
  return (
        <div className="App">
            <NavBar />
            <NavBar1 />
            <div class="row manifesto-tracker">
                <div className="column1 col-lg-3 col-12 secretary">
                    <div class="card left-part">
                        <center class="mt-5 mb-5">
                            <h1 className="manifesto-post">Secretary General</h1>
                            <img src={secretary } alt="Photo" className="manifesto-image" />
                            <div class="container">
                                <h2 className="manifesto-name"><b>Name: Rowan Row</b></h2>
                                <p className="manifesto-rollno mt-0 mb-0 pt-0 pb-0">Roll No: XX00Y000</p>
                                <p className="manifesto-contact">Contact: 1234567890</p>
                                <p className="manifesto-contact">Smail: rowanrow@godav.iitm.ac.in</p>
                            </div>
                        </center>
                    </div>
                </div>
                <div className="column2 col">
                    <div className="Task">
                        <h4 className="d-inline task-heading">
                                Task Distribution: 
                        </h4>
                        <div class="progress">
                            <div class="progress-bar bg-success" role="progressbar" style={{width:"20%"}}>
                                20%
                            </div>
                            <div class="progress-bar bg-warning" role="progressbar" style={{width:"30%"}}>
                                30%
                            </div>
                            <div class="progress-bar bg-danger" role="progressbar" style={{width:"50%"}}>
                                50%
                            </div>
                        </div>
                    </div>

                    <div className="Table">
                        <table class="table table-bordered">
                            <thead>
                                <tr className="table-dark">
                                    <th scope="col">Status</th>
                                    <th scope="col">#</th>
                                    <th scope="col">Task</th>
                                    <th scope="col">Isuues</th>
                                    <th scope="col">Remarks</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <div className="square zero">
                                        </div>
                                    </th>
                                    <td>1</td>
                                    <td>Cleaning the first Floor.</td>
                                    <td>Monkey poop is there !!</td>
                                    <td>will do it tomorrow !!</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div className="square zero">
                                        </div>
                                    </th>
                                    <td>2</td>
                                    <td>Cleaning the roof top.</td>
                                    <td>Pegion poop is there.</td>
                                    <td>Fuck off !!</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div className="square zero">
                                        </div>
                                    </th>
                                    <td>3</td>
                                    <td>Cleaning RR20</td>
                                    <td>Someone drank & vomitted !!</td>
                                    <td>Police complaint that guy !!</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div className="square incomplete">
                                        </div>
                                    </th>
                                    <td>4</td>
                                    <td>Air cleaning the sports room.</td>
                                    <td>The hell phd students smoked till death !!</td>
                                    <td>Need to put their corpse in the dustbin !!</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div className="square incomplete">
                                        </div>
                                    </th>
                                    <td>5</td>
                                    <td>Forcefully drug all guys in the hostel.</td>
                                    <td>They got some high testosterone level.</td>
                                    <td>Will convert guys to gays just to make an even lgbtq distribution !!</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div className="square complete">
                                        </div>
                                    </th>
                                    <td>6</td>
                                    <td>Maloom Nahi !!</td>
                                    <td>Maloom Nahi !!</td>
                                    <td>Maloom Nahi !!</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div className="square complete">
                                        </div>
                                    </th>
                                    <td>7</td>
                                    <td>This is enough da..</td>
                                    <td>I will die one day !!</td>
                                    <td>I wanna sleep !!</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>                  
                </div>
            </div>
            <Footer />

        </div>
  );
};

export default ManifestoTracker
