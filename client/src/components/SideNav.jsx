import Button from 'react-bootstrap/Button';
import '../styles/SideNav.css';
import { Link } from "react-router-dom";


function SideNav() {
    return (
        <nav className="nav flex-column mt-2" >
            <a className="align-self-center nav-link nav-head w-100 text-center rounded">Complaint</a>
            <Link className="nav-link active btn btn-link border-secondary border-start-0 border-end-0 border-top-0" aria-current="page" to="/">Current Complaints</Link>
            <Link className="nav-link btn btn-link border-secondary  border-start-0 border-end-0 border-top-0" to="/desc">Complaint History</Link>
            <Link className="nav-link btn btn-link border-secondary  border-start-0 border-end-0 border-top-0" to="/forms">Complain!!</Link>
        </nav>

    );
}

export default SideNav;