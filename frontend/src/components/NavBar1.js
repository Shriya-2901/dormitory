import iitmlogo from "../images/iitmlogo.png"


const NavBar1 = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-danger">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={iitmlogo} alt="IITMlogo" width="50" height="50"/>
        </a>

      </div>
    </nav>
  );
};

export default NavBar1;
