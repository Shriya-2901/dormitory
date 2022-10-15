import { Link } from "react-router-dom";

const NavBar2 = () => {
  return (
    <nav style={{ backgroundColor: "#0096C7" }} variant="dark"
    sticky="top" expand="sm" className="navbar justify-content-end navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/secretaries">
                Secretaries
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/complaint">
                Complaint
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Websites
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Acad Calendar
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Contacts
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Misc
                  </a>
                  <a className="dropdown-item" href="#">
                    LogOut
                  </a>
                </li>
              </ul>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li> */}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-info btn-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar2;
