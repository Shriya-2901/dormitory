import Button from 'react-bootstrap/Button';
import '../styles/SideNav.css';

function SideNav() {
    return (
        <nav className="nav flex-column" style={{ backgroundColor: "#D9D9D9", height: "max-content" }}>
            <a className="align-self-center nav-link nav-head " href="#">Complaint</a>
            <a className="nav-link active" aria-current="page" href="#">Current Complaints</a>
            <a className="nav-link" href="#">Complaint History</a>
            <a className="nav-link" href="#">Complain!!</a>
        </nav>

    );
}

export default SideNav;