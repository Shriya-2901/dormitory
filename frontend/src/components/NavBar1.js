import iitmlogo from "../images/iitmlogo.png"
import ccwlogo from "../images/ccw-logo.png"


const NavBar1 = () => {
  return (
    <nav style={{ backgroundColor: "#0077B6" }} className="nav-color navbar" variant="dark"
    sticky="top" expand="sm" collapseOnSelect>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={iitmlogo} alt="IITMlogo" width="50" height="50"/>
        </a>

        <h2>Indian Institute of Technology, Madras</h2>

        {/* <a className="navbar-brand" href="#">
          <h4>Godavari Hostel</h4>
        </a> */}
        <a className="navbar-brand" href="#">
          <img src={ccwlogo} alt="ccw-logo" width="50" height="50"/>
        </a>
      </div>
    </nav>
  );
};

export default NavBar1;
